---
name: deploy
description: Déploie le projet quiz collège sur l'hébergement OVH via FTP. Rebuild local (validate + test + build.sh) puis upload d'index.html + sw.js vers www/quizz/. Utiliser quand l'utilisateur dit "deploy", "déploie", "push prod", "upload ovh".
---

# Deploy quiz collège → OVH

## Credentials — lecture sans persistance

Lire `FTP_HOST`, `FTP_USER`, `FTP_PASS` depuis l'environnement OU depuis `.env.deploy` à la racine (gitignored). **Ne jamais** hardcoder dans ce fichier, **ne jamais** `echo` ou logger en clair.

```bash
[ -z "$FTP_HOST" ] && [ -f .env.deploy ] && { set -a; . ./.env.deploy; set +a; }
[ -n "$FTP_HOST" ] && [ -n "$FTP_USER" ] && [ -n "$FTP_PASS" ] \
  || { echo "Variables FTP manquantes. Exporter ou créer .env.deploy."; exit 1; }
```

Si absent → demander à l'utilisateur d'exporter dans le shell courant.

## Étape 1 — Validation locale (obligatoire avant deploy)

```bash
node validate.js                            # intégrité pools
timeout 60 node test-generators.js | tail -5
npx tsc --noEmit 2>&1 | head -5             # types stricts
```

Si un test échoue → **STOP** et corriger.

## Étape 2 — Build local

```bash
./build.sh
```

Vérifie la sortie :
- `CACHE_NAME → quizcollege-<timestamp>` (bumpé)
- `JSX/TS pré-compilés via @babel/core` → le JSX/TS devient du JS plain, plus besoin de Babel Standalone au runtime.
- `Tailwind statique : build/tailwind.css (N o)` → Tailwind purgé inliné, plus de CDN tailwind.
- `index.html régénéré`

Si Tailwind échoue : `npm install --no-save tailwindcss@3`. Si Babel échoue : `npm install --no-save @babel/core @babel/preset-react @babel/preset-typescript`.

Le `index.html` produit **ne contient plus** les CDN `cdn.tailwindcss.com` ni `@babel/standalone` — vérifier avec :

```bash
grep -c "cdn.tailwindcss\|@babel/standalone\|text/babel" index.html  # doit être 0
```

## Étape 3 — Upload runtime (cœur du deploy)

Seulement les fichiers nécessaires à l'exécution : `index.html` contient tout le SPA inliné, `sw.js` pilote le cache.

```bash
lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" -e "set net:timeout 30; cd www/quizz; put index.html; put sw.js; bye"
```

Vérification :

```bash
lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" -e "set net:timeout 15; cd www/quizz; ls index.html sw.js; bye"
```

La date doit être aujourd'hui et la taille doit matcher le local (`ls -la index.html sw.js`).

## Étape 4 — Sources (optionnel, sur demande explicite)

Si l'utilisateur demande de synchroniser les sources (rare — les sources ne sont pas utilisées en runtime, `index.html` contient tout) :

```bash
# Racine
lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" -e "set net:timeout 30; cd www/quizz; \
  put app.tsx; put app.css; put types.ts; put build.sh; \
  put validate.js; put test-generators.js; put test-samples.js; \
  put manifest.webmanifest; put icon.svg; bye"

# quizzes/ un par un (mput peut être bloqué par le sandbox)
for f in quizzes/*.tsx; do
  lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" -e "set net:timeout 30; cd www/quizz/quizzes; put $f -o $(basename $f); bye"
done
```

**Ne jamais** pousser : `save.php`, `load.php`, `.env*`, `config.local.php`, `data/` — sauf demande explicite et vérification manuelle.

## Étape 5 — Smoke test post-deploy (OBLIGATOIRE)

### 5a. Smoke HTTP rapide

```bash
curl -sI "https://www.web-developpeur.com/quizz/index.html" | head -3   # doit être 200
curl -s "https://www.web-developpeur.com/quizz/sw.js" | grep -o "CACHE_NAME.*"  # doit matcher le timestamp local
```

### 5b. Smoke Playwright sur l'URL de prod

Le smoke visite chacun des 16 quiz (6e/5e/4e/3e × maths/physique/svt/histoire) et ramasse les erreurs console / `pageerror`. **C'est ce qui attrape les crashes Babel Standalone sur des syntaxes TS non supportées (ex: `new Set<number>()`, `as [...]`, variable nommée `as`).**

```bash
PROD_URL=https://www.web-developpeur.com/quizz/ timeout 240 npx playwright test test-prod-smoke.spec.js --reporter=line --workers=2
```

Si un test échoue → l'URL problématique est affichée avec le message d'erreur exact. Corriger le fichier incriminé, rebuild, re-upload, relancer le smoke.

Conseil : ouvrir la page en navigation privée pour tester humainement (le SW peut masquer 1 refresh).

## Pièges connus (à vérifier avant chaque deploy)

### Runtime : TS casts et mots-clés dans les fichiers de `quizzes/`
Babel Standalone (CDN) peut buter sur certaines syntaxes TypeScript dans les quiz. Crashes observés en prod : `as number`, `as [number, string]`, variable nommée `const as = …`. Avant deploy, scanner :

```bash
# Casts TS variés (as number, as const, as [...], as {...})
grep -nE "\]\s*as\s*\[|\)\s*as\s*\[|\bas\s+(number|string|any|const|Array|unknown|\{|\w+<)" quizzes/*.tsx
# Identifiants qui collent avec un keyword TS (peuvent paniquer le parser)
grep -nE "\bconst\s+(as|is|type|keyof|infer|satisfies)\s*=" quizzes/*.tsx
# Autres pièges : non-null assertion, generics exotiques
grep -nE "\w\!\.|\w\!\s*;|<T[,>]|\bsatisfies\b" quizzes/*.tsx
```

Si résultat non vide → typer à la déclaration (`const xs: Array<[number, string]> = [...]`) ou renommer la variable. Ceci est documenté dans la mémoire `project_babel_tsx_limits.md`.

### Cache service worker figé
Si `CACHE_NAME` dans `sw.js` n'a pas été bumpé, les utilisateurs voient l'ancienne version. `build.sh` bump automatiquement — **toujours** passer par `./build.sh`, jamais uploader un `sw.js` manuellement modifié.

### PWA offline
Le SW cache `index.html`. En cas de déploiement critique (bug bloquant), conseiller à l'utilisateur de "Vider les données du site" dans les DevTools.

## Rollback rapide

Si le nouveau deploy casse la prod :

```bash
# Récupérer l'index.html d'un commit antérieur (si tracked)
git show HEAD~1:index.html > /tmp/index-prev.html
lftp -u "$FTP_USER,$FTP_PASS" "$FTP_HOST" -e "cd www/quizz; put /tmp/index-prev.html -o index.html; bye"
```

Si `index.html` n'est pas sous git : `git stash` les changements problématiques, `./build.sh`, re-upload.

## Checklist rapide

```
[ ] validate.js passe
[ ] test-generators.js passe
[ ] tsc --noEmit 0 erreur
[ ] grep casts/keywords (voir "Pièges connus") → 0 match
[ ] ./build.sh régénère index.html avec nouveau CACHE_NAME
[ ] lftp put index.html + sw.js
[ ] Vérif taille/date sur FTP matche local
[ ] Smoke curl https://www.web-developpeur.com/quizz/index.html → 200
[ ] Smoke Playwright test-prod-smoke.spec.js → 0 erreur sur les 16 quiz
```
