#!/bin/bash
# Build SPA : inline app.css + app.jsx + quizzes/*.jsx dans index.html, bump CACHE_NAME du SW.
# À lancer après toute modif de app.css, app.jsx ou d'un fichier dans quizzes/.

set -e
cd "$(dirname "$0")"

if [ ! -f app.css ] || [ ! -f app.jsx ] || [ ! -f index.html ]; then
  echo "Erreur : app.css, app.jsx et index.html doivent être présents."
  exit 1
fi

if [ ! -d quizzes ] || [ -z "$(ls -A quizzes/*.jsx 2>/dev/null)" ]; then
  echo "Erreur : dossier quizzes/ vide ou absent."
  exit 1
fi

# Bump CACHE_NAME dans sw.js pour forcer le refresh en PWA.
if [ -f sw.js ]; then
  STAMP=$(date +%Y%m%d-%H%M%S)
  python3 - <<PYEOF
import re
with open('sw.js','r') as f: src = f.read()
src = re.sub(r"const CACHE_NAME = 'quizcollege-[^']+';",
             "const CACHE_NAME = 'quizcollege-${STAMP}';", src, count=1)
with open('sw.js','w') as f: f.write(src)
PYEOF
  echo "  ✓ sw.js : CACHE_NAME → quizcollege-${STAMP}"
fi

python3 <<'PYEOF'
import re, glob, os

with open('app.css','r')    as f: css = f.read()
with open('app.jsx','r')    as f: jsx = f.read()
with open('index.html','r') as f: html = f.read()

# 1. Inline app.css : cible UNIQUEMENT <style id="app-style">...</style>.
# Le bloc <style id="wizard-style"> est préservé (styles vanilla wizard/dashboard).
style_re = re.compile(r'<style id="app-style">.*?</style>', re.S)
if not style_re.search(html):
    raise SystemExit('Marqueur <style id="app-style"> introuvable dans index.html')
html = style_re.sub(lambda m: '<style id="app-style">\n' + css + '\n</style>', html, count=1)

# 2. Inline tous les quizzes/*.jsx entre les marqueurs // BEGIN_QUIZZES et // END_QUIZZES.
quiz_files = sorted(glob.glob('quizzes/*.jsx'))
parts = []
for qf in quiz_files:
    with open(qf,'r') as f:
        body = f.read()
    parts.append(f"// ── {os.path.basename(qf)} ──\n{body}")
quizzes_block = '\n'.join(parts)
quizzes_re = re.compile(r'// BEGIN_QUIZZES\n.*?// END_QUIZZES', re.S)
if not quizzes_re.search(html):
    raise SystemExit("Marqueurs BEGIN_QUIZZES / END_QUIZZES introuvables dans index.html")
# Lambda pour éviter l'interprétation des \ dans le replacement.
html = quizzes_re.sub(lambda m: f"// BEGIN_QUIZZES\n{quizzes_block}\n// END_QUIZZES", html)

# 3. Inline app.jsx entre les marqueurs // BEGIN_APP_JSX et // END_APP_JSX.
app_re = re.compile(r'// BEGIN_APP_JSX\n.*?// END_APP_JSX', re.S)
if not app_re.search(html):
    raise SystemExit("Marqueurs BEGIN_APP_JSX / END_APP_JSX introuvables dans index.html")
html = app_re.sub(lambda m: f"// BEGIN_APP_JSX\n{jsx}\n// END_APP_JSX", html)

with open('index.html','w') as f: f.write(html)
print(f"  ✓ index.html régénéré : {len(quiz_files)} quizzes + app.jsx ({len(jsx)}o) + app.css ({len(css)}o) inlinés")
PYEOF
