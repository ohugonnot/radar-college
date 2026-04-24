#!/usr/bin/env node
// Inline le CSS + JS pré-compilé dans index.html.
// Remplace les <script type="text/babel" data-presets="..."> par des <script> plain.
// Supprime les CDN Babel Standalone + Tailwind CDN (si build/tailwind.css existe).

const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('app.css', 'utf8');
const appJs = fs.readFileSync('build/app.js', 'utf8');
const quizzesJs = fs.readFileSync('build/quizzes.js', 'utf8');
const hasTailwind = fs.existsSync('build/tailwind.css');
const tailwindCss = hasTailwind ? fs.readFileSync('build/tailwind.css', 'utf8') : null;

// 1. Inline app.css dans <style id="app-style">
html = html.replace(
  /<style id="app-style">[\s\S]*?<\/style>/,
  `<style id="app-style">\n${css}\n</style>`
);
if (!/<style id="app-style">/.test(html)) throw new Error('Marqueur <style id="app-style"> manquant');

// 2. Tailwind : remplacer le CDN par un <style id="tailwind-static"> si build/tailwind.css existe
if (tailwindCss) {
  html = html.replace(
    /<script src="https:\/\/cdn\.tailwindcss\.com"><\/script>/,
    `<style id="tailwind-static">${tailwindCss}</style>`
  );
}

// 3. Supprimer le script Babel Standalone (plus besoin, on précompile)
html = html.replace(
  /<script src="https:\/\/unpkg\.com\/@babel\/standalone\/babel\.min\.js"><\/script>\s*/,
  ''
);

// 4. Remplacement des blocs JSX → JS pré-compilé, via découpe par marqueurs
//    (plus sûr qu'un regex `<script>...</script>` qui peut gobber des tags voisins).
function replaceBlock(html, startMarker, endMarker, newContent) {
  const startIdx = html.indexOf(startMarker);
  const endIdx = html.indexOf(endMarker, startIdx);
  if (startIdx < 0 || endIdx < 0) throw new Error(`Marqueurs ${startMarker}/${endMarker} introuvables`);
  // Étendre vers l'arrière jusqu'au <script> ouvrant, vers l'avant jusqu'au </script>
  const openIdx = html.lastIndexOf('<script', startIdx);
  const openEnd = html.indexOf('>', openIdx) + 1;
  const closeIdx = html.indexOf('</script>', endIdx + endMarker.length);
  if (openIdx < 0 || closeIdx < 0) throw new Error(`Tags <script> absents autour de ${startMarker}`);
  return html.slice(0, openIdx)
    + `<script>\n${startMarker}\n${newContent}\n${endMarker}\n</script>`
    + html.slice(closeIdx + '</script>'.length);
}
html = replaceBlock(html, '// BEGIN_QUIZZES', '// END_QUIZZES', quizzesJs);
html = replaceBlock(html, '// BEGIN_APP_JSX', '// END_APP_JSX', appJs);

fs.writeFileSync('index.html', html);

const nQuizzes = fs.readdirSync('quizzes').filter(f => /\.tsx$/.test(f)).length;
console.log(`  ✓ index.html régénéré : ${nQuizzes} quizzes précompilés + app.js (${appJs.length}o) + app.css (${css.length}o)${tailwindCss ? ' + tailwind static (' + tailwindCss.length + 'o)' : ' + tailwind CDN'}`);
