#!/usr/bin/env node
// Échantillonnage pédagogique des générateurs : affiche 2 sorties concrètes par gen
// pour inspection manuelle (chiffres extrêmes, énoncés bizarres, hints bancals, etc.).
//
// Usage : node test-samples.js [quiz-key]
//   node test-samples.js                 → tous les quiz, 2 échantillons par gen
//   node test-samples.js maths-3         → seulement maths-3
//   node test-samples.js maths-3 ope-1   → seulement maths-3 / ope-1 (8 échantillons)

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6D2B79F5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

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

function serializeNode(n) {
  if (n == null || n === false) return '';
  if (typeof n === 'string' || typeof n === 'number') return String(n);
  if (Array.isArray(n)) return n.map(serializeNode).join('');
  if (typeof n === 'object' && n.props) {
    const children = n.props.children;
    if (children == null) return '';
    return serializeNode(children);
  }
  return '';
}

function setupGlobals() {
  global.React = {
    createElement: (type, props, ...children) => ({
      type,
      props: { ...(props || {}), children: children.length === 1 ? children[0] : children },
    }),
    Fragment: 'Fragment',
  };
  global.window = { ALL_QUIZZES: {} };
  global.F = ({ n, d }) => ({ type: 'F', props: { children: `${serializeNode(n)}/${serializeNode(d)}` } });
  global.M = ({ children }) => ({ type: 'M', props: { children } });
}

function loadQuizFile(file) {
  const src = fs.readFileSync(file, 'utf8');
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

function main() {
  setupGlobals();
  const quizDir = path.join(__dirname, 'quizzes');
  const files = fs.readdirSync(quizDir).filter(f => /\.tsx$/.test(f)).sort();
  for (const f of files) loadQuizFile(path.join(quizDir, f));

  const filterQuiz = process.argv[2];
  const filterKey = process.argv[3];
  const N = filterKey ? 8 : 2;

  let issues = [];
  for (const [quizKey, cfg] of Object.entries(global.window.ALL_QUIZZES)) {
    if (filterQuiz && quizKey !== filterQuiz) continue;
    if (!cfg || !cfg.POOL) continue;
    for (const [domainKey, pool] of Object.entries(cfg.POOL)) {
      for (const q of pool) {
        if (typeof q.gen !== 'function') continue;
        if (filterKey && q.key !== filterKey) continue;
        console.log(`\n[${quizKey} / ${domainKey} / ${q.key}]`);
        for (let i = 0; i < N; i++) {
          const seed = (i * 2654435761) >>> 0;
          const raw = q.gen(mulberry32(seed));
          const out = {
            q: frenchify(raw.q),
            options: raw.options.map(frenchify),
            correct: raw.correct,
            hint: typeof raw.hint === 'string' ? raw.hint.replace(FRENCH_DEC_RE, '$1,$2') : raw.hint,
          };
          const qTxt = serializeNode(out.q);
          const optsTxt = out.options.map(serializeNode);
          const good = optsTxt[out.correct];
          console.log(`  seed=${String(seed).padStart(10)} | ${qTxt}`);
          console.log(`       options : ${optsTxt.map((o, j) => j === out.correct ? `✓${o}` : o).join('  |  ')}`);
          console.log(`       hint    : ${out.hint || '(aucun)'}`);
          // Heuristiques : le hint devrait mentionner la bonne réponse textuellement
          if (out.hint) {
            // Extraire juste le nombre/texte principal de good (ex '17' dans '17 V')
            const goodCore = String(good).replace(/[^\d.,\-\+\/]/g, '').replace(/^[.,]|[.,]$/g, '');
            if (goodCore.length >= 1 && !out.hint.replace(/\s/g, '').includes(goodCore.replace(/\s/g, ''))) {
              issues.push(`${quizKey}/${q.key} seed=${seed} : hint ne mentionne pas la bonne réponse « ${goodCore} »`);
            }
          }
        }
      }
    }
  }
  if (issues.length) {
    console.log('\n=== Heuristique "hint mentionne la réponse" ===');
    for (const i of issues.slice(0, 20)) console.log('  ⚠', i);
    if (issues.length > 20) console.log(`  ... (+${issues.length - 20} autres)`);
  }
  console.log(`\nÉchantillons affichés. ${issues.length} indices d'incohérence hint↔réponse.`);
}

main();
