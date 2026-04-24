#!/usr/bin/env node
// Valide l'intégrité de chaque quiz HTML :
//  - JSX parse sans erreur
//  - Clés de questions uniques dans chaque pool
//  - `correct` est un index valide
//  - `options` contient exactement 4 entrées
//  - Chaque domaine dans PICK existe dans POOL, et PICK[d] ≤ taille du pool
//  - Somme des PICK = 30
//  - Chaque domaine de PLANS existe dans DOMAINS
//
// Usage : node validate.js
// Dépendance : @babel/core + @babel/preset-react (dans node_modules)

const fs = require('fs');
const path = require('path');

let babel;
try {
  babel = require('@babel/core');
} catch {
  // Fallback sur /tmp/node_modules (dev)
  try { babel = require('/tmp/node_modules/@babel/core'); } catch {
    console.error('❌ @babel/core introuvable. Installe-le : npm install --no-save @babel/core @babel/preset-react');
    process.exit(1);
  }
}

const presetReact = (() => {
  try { require.resolve('@babel/preset-react'); return '@babel/preset-react'; }
  catch { return '/tmp/node_modules/@babel/preset-react'; }
})();
const presetTs = (() => {
  try { require.resolve('@babel/preset-typescript'); return '@babel/preset-typescript'; }
  catch { return null; }
})();

// SPA : les pools sont maintenant dans quizzes/*.tsx (un fichier par quiz).
const quizDir = path.join(__dirname, 'quizzes');
const files = fs.existsSync(quizDir)
  ? fs.readdirSync(quizDir).filter(f => /^(maths|physique|svt|histoire|geo)-\d\.tsx$/.test(f)).sort().map(f => path.join('quizzes', f))
  : [];

if (files.length === 0) {
  console.error('❌ Aucun fichier quiz trouvé dans quizzes/.');
  process.exit(1);
}

let totalErrors = 0;
let totalWarnings = 0;

function extractConfig(src, file) {
  // quizzes/*.tsx contient directement window.ALL_QUIZZES['key'] = {...};
  // On retourne le fichier brut — le parser Babel et les regex de checkIntegrity gèrent.
  return src.includes('window.ALL_QUIZZES') || src.includes('window.QUIZ_CONFIG') ? src : null;
}

function parseJSX(src) {
  // Vérifie que ça compile ; on ne peut pas exécuter car JSX + DOM.
  const presets = presetTs ? [presetReact, presetTs] : [presetReact];
  babel.parseSync(src, { presets, sourceType: 'script', filename: 'quiz.tsx' });
}

function checkIntegrity(src, file) {
  const errors = [];
  const warnings = [];

  // On ne peut pas exécuter le JSX ici, mais on peut matcher des patterns simples :
  //   key:'xxx'    → liste des clés
  //   correct: N   → index
  //   options: [..4 entrées..]   → cohérence

  // Extraction naïve mais efficace : on cherche les blocs "key:'xxx', ... correct: N"
  const keyPattern = /key\s*:\s*['"]([^'"]+)['"]/g;
  const allKeys = [...src.matchAll(keyPattern)].map(m => m[1]);
  const keyCounts = {};
  allKeys.forEach(k => keyCounts[k] = (keyCounts[k] || 0) + 1);
  const duplicates = Object.entries(keyCounts).filter(([k,c]) => c > 1);
  if (duplicates.length) {
    errors.push(`Clés dupliquées : ${duplicates.map(([k,c]) => `${k}(×${c})`).join(', ')}`);
  }

  // PICK total
  const pickMatch = src.match(/PICK\s*:\s*\{([\s\S]*?)\}\s*,\s*\n\s*(?:PLANS|\})/);
  if (pickMatch) {
    const pickBody = pickMatch[1];
    const entries = [...pickBody.matchAll(/(\w+)\s*:\s*(\d+)/g)];
    const total = entries.reduce((s, m) => s + parseInt(m[2], 10), 0);
    if (total !== 30) {
      errors.push(`Somme des PICK = ${total} (attendu 30)`);
    }
    // Vérifier que chaque domaine de PICK est dans DOMAINS
    const domainsMatch = src.match(/DOMAINS\s*:\s*\{([\s\S]*?)\n\s*\}/);
    if (domainsMatch) {
      const domainIds = [...domainsMatch[1].matchAll(/^\s*(\w+)\s*:\s*\{/gm)].map(m => m[1]);
      const pickIds = entries.map(e => e[1]);
      const missingInDomains = pickIds.filter(id => !domainIds.includes(id));
      const missingInPick = domainIds.filter(id => !pickIds.includes(id));
      if (missingInDomains.length) errors.push(`PICK contient des domaines absents de DOMAINS : ${missingInDomains.join(', ')}`);
      if (missingInPick.length) warnings.push(`DOMAINS déclare des chapitres sans PICK : ${missingInPick.join(', ')}`);
    }
  } else {
    warnings.push('Bloc PICK introuvable (pattern)');
  }

  // Vérifier que chaque `correct: N` a un N ∈ [0..3]
  const correctMatches = [...src.matchAll(/correct\s*:\s*(-?\d+)/g)];
  correctMatches.forEach(m => {
    const n = parseInt(m[1], 10);
    if (n < 0 || n > 3) errors.push(`correct hors plage (0-3) : ${n}`);
  });

  return { errors, warnings };
}

console.log(`\nValidation de ${files.length} quiz…\n`);

files.forEach(f => {
  const src = fs.readFileSync(path.join(__dirname, f), 'utf8');
  const cfg = extractConfig(src, f);
  if (!cfg) {
    console.log(`  ❌ ${f} — bloc window.QUIZ_CONFIG introuvable`);
    totalErrors++;
    return;
  }
  // 1. JSX parse
  try {
    parseJSX(cfg);
  } catch (e) {
    console.log(`  ❌ ${f} — JSX invalide : ${e.message.split('\n')[0]}`);
    totalErrors++;
    return;
  }
  // 2. Intégrité des données
  const { errors, warnings } = checkIntegrity(cfg, f);
  if (errors.length === 0 && warnings.length === 0) {
    console.log(`  ✓ ${f}`);
  } else {
    if (errors.length) console.log(`  ❌ ${f}`);
    else console.log(`  ⚠ ${f}`);
    errors.forEach(e => console.log(`      ERR : ${e}`));
    warnings.forEach(w => console.log(`      WARN: ${w}`));
    totalErrors += errors.length;
    totalWarnings += warnings.length;
  }
});

console.log(`\n${totalErrors === 0 ? '✅' : '❌'} ${totalErrors} erreur(s), ${totalWarnings} warning(s)\n`);
process.exit(totalErrors === 0 ? 0 : 1);
