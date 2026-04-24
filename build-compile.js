#!/usr/bin/env node
// Pré-compile app.tsx + quizzes/*.tsx en JS via @babel/core.
// Sortie : build/app.js + build/quizzes.js (concat de tous les quizzes).
// Exécuté par build.sh.

const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');

const OUT = 'build';
fs.mkdirSync(OUT, { recursive: true });

const presets = [
  [require.resolve('@babel/preset-react')],
  [require.resolve('@babel/preset-typescript'), { isTSX: true, allExtensions: true }],
];

function compile(src, filename) {
  return babel.transformSync(src, {
    presets,
    sourceType: 'script',
    filename,
    compact: false,
    comments: false,
  }).code;
}

// 1. app.tsx
{
  const src = fs.readFileSync('app.tsx', 'utf8');
  const code = compile(src, 'app.tsx');
  fs.writeFileSync(path.join(OUT, 'app.js'), code);
  console.log(`    app.tsx (${src.length}o) → build/app.js (${code.length}o)`);
}

// 2. Helpers JSX (F, M) + quizzes/*.tsx concaténés en un bloc TSX, puis compilés
{
  const HELPERS_TSX = `
window.ALL_QUIZZES = {};
const F = ({n, d}) => <span className="frac"><span>{n}</span><span>{d}</span></span>;
const M = ({children}) => <span className="math">{children}</span>;
`;
  const files = fs.readdirSync('quizzes').filter(f => /\.tsx$/.test(f)).sort();
  const parts = files.map(f => {
    const src = fs.readFileSync(path.join('quizzes', f), 'utf8');
    return `// ── ${f} ──\n${src}`;
  });
  const fullTsx = HELPERS_TSX + '\n' + parts.join('\n\n');
  const code = compile(fullTsx, 'quizzes-all.tsx');
  fs.writeFileSync(path.join(OUT, 'quizzes.js'), code);
  console.log(`    ${files.length} quizzes/*.tsx + helpers → build/quizzes.js (${code.length}o)`);
}
