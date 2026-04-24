#!/bin/bash
# Build SPA :
# 1. Pré-compile app.tsx + quizzes/*.tsx via Babel (JSX + TS → JS plain)
# 2. Génère un CSS Tailwind statique purged depuis index.html
# 3. Inline tout dans index.html, bump CACHE_NAME du SW
#
# Objectif : supprimer les dépendances CDN runtime (Babel Standalone, Tailwind CDN)
# → chargement plus rapide + compatible file:// + pas de warnings prod.

set -e
cd "$(dirname "$0")"

if [ ! -f app.css ] || [ ! -f app.tsx ] || [ ! -f index.html ]; then
  echo "Erreur : app.css, app.tsx et index.html doivent être présents."
  exit 1
fi

if [ ! -d quizzes ] || [ -z "$(ls -A quizzes/*.tsx 2>/dev/null)" ]; then
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

# Étape 1 — Pré-compile TSX/JSX → JS via @babel/core (Node)
node build-compile.js
echo "  ✓ JSX/TS pré-compilés via @babel/core"

# Étape 2 — Génère Tailwind statique (purge depuis index.html)
if [ -d node_modules/tailwindcss ]; then
  npx tailwindcss -i tailwind-input.css -o build/tailwind.css --content './index.html' --minify 2>/dev/null || {
    echo "  ⚠ tailwindcss CLI a échoué, conservation du CDN dans index.html"
    rm -f build/tailwind.css
  }
  if [ -f build/tailwind.css ]; then
    echo "  ✓ Tailwind statique : build/tailwind.css ($(wc -c < build/tailwind.css) o)"
  fi
fi

# Étape 3 — Inline tout dans index.html
node build-inline.js
