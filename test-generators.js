#!/usr/bin/env node
// Unit-test des questions paramétriques (`gen`).
// Pour chaque question dotée d'un générateur, on exécute 200 seeds et on vérifie :
//   - 4 options
//   - correct ∈ [0..3]
//   - options[correct] est non-null et non-undefined
//   - options stringifiées uniques (pas de doublons comme ['6','6','7','8'])
//   - même seed → même contenu (déterminisme)
//   - au moins 10 sorties distinctes sur 200 seeds (variabilité effective)
//
// Usage : node test-generators.js

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

// PRNG seedé (copie exacte de mulberry32 dans app.tsx).
function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// Post-processing appliqué par app.tsx buildQuiz. Reflété ici pour que les tests
// reproduisent exactement ce que l'élève voit.
const FRENCH_DEC_RE = /(\d)\.(\d)/g;
function frenchify(node) {
  if (typeof node === 'string') return node.replace(FRENCH_DEC_RE, '$1,$2');
  if (typeof node === 'number') return String(node).replace(FRENCH_DEC_RE, '$1,$2');
  if (Array.isArray(node)) return node.map(frenchify);
  if (node && typeof node === 'object' && node.props) {
    const children = node.props.children;
    if (children === undefined) return node;
    return { ...node, props: { ...node.props, children: Array.isArray(children) ? children.map(frenchify) : frenchify(children) } };
  }
  return node;
}

// Stringify un ReactNode : JSX compilé → objet { type, props }.
// On descend récursivement pour produire un texte représentatif.
function serializeNode(n) {
  if (n == null || n === false) return '';
  if (typeof n === 'string' || typeof n === 'number') return String(n);
  if (Array.isArray(n)) return n.map(serializeNode).join('');
  if (typeof n === 'object' && n.props) {
    const children = n.props.children;
    if (children == null) return `<${typeof n.type === 'string' ? n.type : 'C'}/>`;
    return serializeNode(children);
  }
  return '';
}

// Shim React.createElement pour exécuter du JSX compilé sans React.
function setupGlobals() {
  global.React = {
    createElement: (type, props, ...children) => ({
      type,
      props: { ...(props || {}), children: children.length === 1 ? children[0] : children },
    }),
    Fragment: 'Fragment',
  };
  global.window = { ALL_QUIZZES: {} };
  // Composants F et M utilisés dans index.html : on les stub.
  global.F = ({ n, d }) => ({ type: 'F', props: { children: `${serializeNode(n)}/${serializeNode(d)}` } });
  global.M = ({ children }) => ({ type: 'M', props: { children } });
}

// Cache du kit SVG (préfixé à chaque quiz pour que les composants soient
// dans la même portée que les énoncés qui les référencent).
let KIT_SRC = null;
function getKitSrc() {
  if (KIT_SRC === null) {
    const kitPath = path.join(__dirname, 'quizzes', '_svg-kit.tsx');
    KIT_SRC = fs.existsSync(kitPath) ? fs.readFileSync(kitPath, 'utf8') : '';
  }
  return KIT_SRC;
}

function loadQuizFile(file) {
  // Les quizzes peuvent référencer des composants définis dans _svg-kit.tsx ;
  // on préfixe le kit à la source avant compilation pour les exposer en scope.
  const src = path.basename(file).startsWith('_') ? fs.readFileSync(file, 'utf8') : getKitSrc() + '\n' + fs.readFileSync(file, 'utf8');
  const compiled = babel.transformSync(src, {
    presets: [
      [require.resolve('@babel/preset-typescript'), { isTSX: true, allExtensions: true }],
      require.resolve('@babel/preset-react'),
    ],
    filename: file,
  }).code;
  const fn = new Function('window', 'React', 'F', 'M', compiled);
  fn(global.window, global.React, global.F, global.M);
}

const semanticWarnings = [];
function testQuestion(quizKey, domainKey, q) {
  const issues = [];
  if (typeof q.gen !== 'function') return null;
  const SEEDS = 200;
  const outputs = new Set();
  let firstSeedOut = null;
  for (let i = 0; i < SEEDS; i++) {
    const seed = (i * 2654435761) >>> 0;
    let out;
    try {
      const raw = q.gen(mulberry32(seed));
      out = {
        q: frenchify(raw.q),
        options: raw.options.map(frenchify),
        correct: raw.correct,
        hint: typeof raw.hint === 'string' ? raw.hint.replace(FRENCH_DEC_RE, '$1,$2') : raw.hint,
      };
    } catch (e) {
      issues.push(`seed ${seed} : exception ${e.message}`);
      continue;
    }
    if (!out || !Array.isArray(out.options)) {
      issues.push(`seed ${seed} : options absentes`);
      continue;
    }
    if (out.options.length !== 4) {
      issues.push(`seed ${seed} : ${out.options.length} options (≠4)`);
    }
    if (typeof out.correct !== 'number' || out.correct < 0 || out.correct > 3) {
      issues.push(`seed ${seed} : correct=${out.correct} hors [0,3]`);
    }
    if (out.options[out.correct] == null) {
      issues.push(`seed ${seed} : options[correct] est null`);
    }
    // Doublons
    const strings = out.options.map(serializeNode);
    const uniq = new Set(strings);
    if (uniq.size !== strings.length) {
      issues.push(`seed ${seed} : options doublons → [${strings.join(' | ')}]`);
    }
    // Clé de sortie pour variabilité
    const key = serializeNode(out.q) + '|' + strings.join('¤') + '|' + out.correct;
    outputs.add(key);
    if (i === 0) firstSeedOut = key;

    // Validation sémantique (heuristique) — enregistre dans semanticWarnings
    // (pas fail-hard) : pour les questions à réponse numérique, le hint devrait
    // contenir cette valeur (ou calculation qui y mène).
    // Skip si la réponse est rendue en JSX (ex: puissances <sup>), trop de faux positifs.
    const rawGood = out.options[out.correct];
    const hasSup = (n) => {
      if (!n || typeof n !== 'object') return false;
      if (n.type === 'sup') return true;
      const c = n.props && n.props.children;
      if (Array.isArray(c)) return c.some(hasSup);
      return hasSup(c);
    };
    if (typeof out.hint === 'string' && !hasSup(rawGood)) {
      const goodTxt = serializeNode(rawGood).trim().replace(/−/g, '-');
      const goodMatch = goodTxt.match(/^(-?\d+(?:[.,]\d+)?)\s*(?:cm³|cm²|cm|m³|m²|m\b|km\b|kg\b|g\b|mg\b|t\b|L\b|mL\b|cL\b|dL\b|Ω|V\b|A\b|W\b|J\b|kWh|Hz|N\b|s\b|h\b|min\b|mol\b|°C?)?\s*$/);
      if (goodMatch) {
        const goodNum = parseFloat(goodMatch[1].replace(',', '.'));
        // Vérifier simplement que le hint CONTIENT la valeur bonne réponse
        // (robuste aux variations = vs ≈ vs →, et aux labels parasites).
        const hintNorm = out.hint.replace(/−/g, '-').replace(/,/g, '.');
        const numericTokens = [...hintNorm.matchAll(/(-?\d+(?:\.\d+)?)/g)].map(m => parseFloat(m[1]));
        const found = numericTokens.some(v => !Number.isNaN(v) && Math.abs(v - goodNum) < 0.005 + Math.abs(goodNum) * 0.005);
        if (!found && !Number.isNaN(goodNum)) {
          semanticWarnings.push(`${quizKey}/${q.key} seed=${seed} : hint ne contient pas la bonne réponse « ${goodTxt} » → « ${out.hint.slice(0, 80)} »`);
        }
      }
    }
  }
  // Déterminisme : round-trip complet sur 5 seeds variés (dont seed=0).
  // Simule le cycle réel : seed généré → stocké dans LogEntry → rejoué par rebuildFromAttempt.
  const testSeeds = [0, 1, 42, 1234567, 0xDEADBEEF >>> 0];
  for (const s of testSeeds) {
    const a = q.gen(mulberry32(s));
    const b = q.gen(mulberry32(s));
    const ka = serializeNode(a.q) + '|' + a.options.map(serializeNode).join('¤') + '|' + a.correct;
    const kb = serializeNode(b.q) + '|' + b.options.map(serializeNode).join('¤') + '|' + b.correct;
    if (ka !== kb) { issues.push(`non déterministe seed=${s}`); break; }
  }
  if (outputs.size < 10) {
    issues.push(`variabilité faible : seulement ${outputs.size} sorties distinctes sur ${SEEDS} seeds`);
  }
  return { quizKey, domainKey, key: q.key, issues, uniqueOutputs: outputs.size };
}

function main() {
  setupGlobals();
  const quizDir = path.join(__dirname, 'quizzes');
  const files = fs.readdirSync(quizDir).filter(f => /\.tsx$/.test(f)).sort();
  for (const f of files) loadQuizFile(path.join(quizDir, f));

  let totalGenerators = 0;
  let totalIssues = 0;
  const results = [];
  for (const [quizKey, cfg] of Object.entries(global.window.ALL_QUIZZES)) {
    if (!cfg || !cfg.POOL) continue;
    for (const [domainKey, pool] of Object.entries(cfg.POOL)) {
      for (const q of pool) {
        if (typeof q.gen === 'function') process.stderr.write(`gen ${quizKey}/${domainKey}/${q.key}\n`);
        const r = testQuestion(quizKey, domainKey, q);
        if (r) {
          totalGenerators++;
          if (r.issues.length) totalIssues += r.issues.length;
          results.push(r);
        }
      }
    }
  }
  console.log(`\nGénérateurs testés : ${totalGenerators}`);
  // Résumé par quiz/domaine
  const byQuiz = {};
  for (const r of results) {
    byQuiz[r.quizKey] = byQuiz[r.quizKey] || { count: 0, issues: 0, lowVar: [] };
    byQuiz[r.quizKey].count++;
    if (r.issues.length) byQuiz[r.quizKey].issues++;
    if (r.uniqueOutputs < 20) byQuiz[r.quizKey].lowVar.push(`${r.key} (${r.uniqueOutputs})`);
  }
  for (const [qk, s] of Object.entries(byQuiz)) {
    console.log(`  ${qk.padEnd(15)} ${s.count} gen, ${s.issues} en erreur${s.lowVar.length ? `, variabilité faible: ${s.lowVar.join(', ')}` : ''}`);
  }
  // Détail erreurs
  for (const r of results) {
    if (r.issues.length) {
      console.log(`\n  ❌ [${r.quizKey} / ${r.domainKey} / ${r.key}]`);
      r.issues.slice(0, 5).forEach(i => console.log(`     ${i}`));
      if (r.issues.length > 5) console.log(`     ... (+${r.issues.length - 5} autres)`);
    }
  }
  // Warnings sémantiques : agrégés par générateur pour filtrer le bruit.
  // Un gen est "suspect" seulement si ≥ 50 % des 200 seeds échouent (signale un vrai bug).
  const warnByGen = {};
  for (const w of semanticWarnings) {
    const key = w.split(' seed=')[0];
    warnByGen[key] = (warnByGen[key] || 0) + 1;
  }
  const suspicious = Object.entries(warnByGen).filter(([_, n]) => n >= 100).sort((a,b) => b[1]-a[1]);
  if (suspicious.length) {
    console.log(`\n⚠  Générateurs sémantiquement suspects (≥ 50 % seeds avec hint incohérent) :`);
    for (const [gen, n] of suspicious) console.log(`    ${gen} (${n}/200 seeds)`);
    console.log(`    → inspection manuelle recommandée via \`node test-samples.js <quiz> <key>\`.\n`);
  }
  // Split issues : les "options doublons" / "correct hors range" / "options<4"
  // sont des BUGS (l'élève voit quelque chose de cassé). La "variabilité faible"
  // est un WARN qualité (l'input space du gen est naturellement étroit) — on
  // n'échoue pas dessus pour garder le pre-commit non-bloquant sur du cosmétique.
  let bugs = 0, warns = 0;
  for (const r of results) for (const i of r.issues) {
    if (i.startsWith('variabilité faible')) warns++; else bugs++;
  }
  console.log(`\n${bugs === 0 ? '✅' : '❌'} ${bugs} bug(s) · ${warns} warning(s) variabilité faible · ${totalGenerators} générateurs testés\n`);
  process.exit(bugs === 0 ? 0 : 1);
}

main();
