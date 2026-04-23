# CLAUDE.md

Plateforme d'évaluations diagnostiques collège (6ème → 3ème × maths/physique-chimie/SVT = 12 quiz). Usage perso/familial. Wizard UX mobile-first, gamification, PWA installable, persistance bicouche. **SPA mono-HTML** : un seul `index.html` déployé, tout le reste inliné par `build.sh`.

## Structure

```
/
├── index.html                     SPA entry point (wizard + dashboard + router + 12 quizzes inlinés)
├── app.css                        Styles partagés — source maître inlinée
├── app.jsx                        Logique React (wrappée en IIFE) — source maître inlinée
├── build.sh                       Régénère index.html : inline CSS + JSX + 12 quizzes + bump CACHE_NAME
├── quizzes/                       12 fichiers JSX source : un par quiz (maths-{3,4,5,6}.jsx, etc.)
├── validate.js                    Vérifie intégrité des 12 pools (lit quizzes/*.jsx)
├── test.spec.js                   Tests Playwright (~47 scénarios)
├── save.php                       POST attempt → data/{slug}.json
├── load.php                       GET ?slug=xxx → JSON complet profil
├── manifest.webmanifest           PWA manifest
├── sw.js                          Service worker (cache-first, CACHE_NAME versionné)
├── icon.svg                       Logo (sceau scientifique)
└── data/                          Créé par save.php : 1 fichier JSON par élève
```

## Lancer / déployer

- **Local (file://)** : double-clic sur `index.html`. Fonctionne sans serveur local — sync serveur et service worker désactivés (détection `location.protocol === 'file:'`).
- **Serveur** : uploader `index.html` + `sw.js` + `manifest.webmanifest` + `icon.svg` + `save.php` + `load.php`. Protéger `data/` (exemple `.htaccess` en tête de `save.php`). Active : sync cross-device, PWA, SW offline.
- **Mobile-first**. Tap targets ≥ 48 px. Testé tablette.

## Build

`./build.sh` :
1. Bump automatique de `CACHE_NAME` dans `sw.js` (timestamp) → évite le cache figé
2. Concat les 12 `quizzes/*.jsx` entre les marqueurs `// BEGIN_QUIZZES` / `// END_QUIZZES` d'index.html
3. Inline `app.jsx` entre `// BEGIN_APP_JSX` / `// END_APP_JSX`
4. Inline `app.css` dans le `<style>` principal

Modifier les questions d'un quiz = éditer `quizzes/{matière}-{niveau}.jsx` + `./build.sh`. Modifier la logique React = éditer `app.jsx` + `./build.sh`. Le style = `app.css` + `./build.sh`.

## SPA — architecture du routeur

- Le vanilla JS d'index.html (routeur wizard) et app.jsx (quiz React) partagent la même page. app.jsx est **wrappé dans une IIFE** (`(function appJsxModule(){...})()`) pour éviter les collisions de noms globaux (ALL_BADGES, slugName, showToast, etc. existent dans les deux).
- Quand la route hash est un quiz (`#/{N}eme/{subject}`), le routeur appelle `window.mountQuizApp(key, {reportAt})` qui cache `#wizard-container`, montre `#root`, et rend `<App key={key}/>`.
- Au retour vers une route wizard, `window.unmountQuizApp()` démonte et remet le wizard visible.
- `setActiveQuiz(key)` swap les bindings module-level `CFG/DOMAINS/POOL/PICK/PLANS` (des `let`, pas `const`) — les fonctions capturant ces variables par closure lisent la valeur actuelle.
- Race condition gérée : si le routeur appelle `mountQuizApp` avant que Babel ait fini de compiler app.jsx, la demande est mise en queue dans `window.__pendingQuizMount` et vidée à la fin de l'IIFE.

## Persistance

**localStorage** (source de vérité offline/file://) :
- `quiz-{matière}-{niveau}-history-v1` : profils par slug avec leurs attempts
- `quiz-{matière}-{niveau}-wrong-tracker-v1` : tracker d'erreurs par question-key (pondération buildQuiz)
- `quiz-active-student` : { name, slug } — pseudo actif partagé
- `quiz-active-level` : niveau actif (6/5/4/3)
- `quiz-theme`, `quiz-dyslexia` : préférences

**Serveur** (HTTP seulement) : `data/{slug}.json`, sync idempotente par date ISO via `saveAttemptToServer` et `syncFromServer`. Toast `Synchronisé · N nouveaux tests` quand ça rapatrie.

## Format d'un attempt (JSON exploitable par IA)

```json
{
  "date":"2026-04-22T18:49:12Z",
  "mode":"training" | "exam",
  "note":14.3, "noteRaw":13.5,
  "correct":22, "total":30, "totalMs":487000,
  "domains":{ "pythagore":{ "level":"acquis","pct":87 }, ... },
  "log":[
    { "pos":1, "key":"pyt-1", "domain":"pythagore",
      "given":0, "correct":0, "ok":true,
      "ms":4320, "hinted":false,
      "order":[2,0,3,1] }
  ]
}
```

Le `order` stocké permet la **relecture exacte** via `rebuildFromAttempt`. Le `hinted` indique si l'élève a cliqué l'ampoule (signal faible pour l'IA).

## Barème (style brevet)

- **+1 pt** par bonne réponse · **0 pt** si la question est passée · **−0,5 pt** si la réponse est fausse.
- La constante `WRONG_PENALTY = 0.5` dans `analyze()` (app.jsx). Note clampée à 0 (pas de négatif).
- Incite à cliquer "Passer" plutôt qu'à deviner au hasard. Message explicite sur le HomeScreen du quiz.
- Le pct par domaine (acquis/fragile/non-acquis) n'applique PAS la pénalité — il reflète juste le taux de bonnes réponses (mastery vs prise de risque).

## Modes de quiz

- **🎓 Entraînement** (`mode:'training'`) : ampoule à **3 niveaux**
  - Clic 1 : **💡 Méthode** — affiche `MEMO_BANK[domain]` (règle générale, pas la solution)
  - Clic 2 : **Plus d'aide** — affiche `q.hint` (spoiler assumé)
  - Clic 3 : Masquer
- **📝 Interrogation** (`mode:'exam'`) : aucun indice. Pour les quiz 3ème, timer 30 min avec avertissements via toast.

## Architecture

### app.jsx (composants)

`HomeScreen` · `QuizScreen` · `ConfirmScreen` · `ReportScreen` · `CompetenceRadar` · `ProgressCurve` · `MemoSection` · `SubjectMark` · `Chip` · `App`

### Landing (index.html)

Routeur sémantique hash-based (compatible `file://` — `pushState` y est interdit par la same-origin policy) :
- Routes : `#/prenom`, `#/niveau`, `#/{N}eme` (étape matière avec niveau N∈3-6), `#/{N}eme/{subject}` (deep-link qui redirige vers `{subject}-{N}.html`), `#/dashboard`
- `showStep(name, fromHashChange)` → `setHash()` si pas hashchange. Flag `hashLock` évite la boucle de re-render
- `hashchange` écouté (pas popstate — `location.hash = ...` fire hashchange en file:// comme en HTTP)
- `parseHash(h)` → `{ step, level?, subject? }` | `null` ; `hashForStep(name, lvl)` → `#/...`
- `initFromHashOrDecide()` au load → démarrage depuis hash si présent, sinon decideStep
- Le `<title>` est mis à jour dynamiquement par étape (SEO)
- Le bouton "← Retour" utilise `history.back()` si l'entry précédente est du wizard, sinon fallback showStep

### Tableau de bord (étape results)

- **Sélecteur de niveau 6/5/4/3** en haut — change `quiz-active-level`, toast, re-render.
- 4 stats : tests, moyenne /20, série 🔥, temps total cumulé
- 10 badges (`ALL_BADGES`), série de tests récents, recommandation intelligente
- Courbe chronologique (≥ 2 tests)
- Liste complète des tests passés (cliquable → `{quiz}.html?view=report&at=<date>`)

### Rose des compétences (`CompetenceRadar`)

ViewBox 600×440 (plus large que haut) pour laisser de l'air aux labels. Superposition du test précédent en pointillé gris.

### SEO

Landing et chaque quiz ont : title spécifique, meta description, Open Graph complet, canonical. Landing a en plus un JSON-LD Schema.org `EducationalApplication`.

## Conventions

- Ajouter un chapitre à un quiz = `DOMAINS` + `POOL` + `PICK` + `PLANS` (+ idéalement `MEMO_BANK` dans app.jsx). Somme `PICK` = 30 (vérifiée par `validate.js`).
- Clé de question (`key`) stable — base du tracker d'erreurs et du log.
- **`validate.js` détecte** : clés dupliquées, somme PICK ≠ 30, correct hors [0-3], doublons numériques dans les options (avec détection fractions).
- Français uniquement.
- Périmètre maths/physique/SVT — pas d'autres matières (QCM inadapté).

## Pools — tailles actuelles

Tous les quiz ont entre 30 et 59 questions, ≥ 3 par domaine. Pour chaque passage, `buildQuiz` tire 30 questions au total selon la répartition `PICK`, avec pondération par taux d'erreur (spaced repetition light).

## TODO / Idées futures

**Pas fait, à prioriser selon l'usage** :
- Images / figures SVG inline pour géométrie, circuits, anatomie.
- Export PDF stylé du bilan (au-delà de window.print).
- Fiche "révise vite" : top erreurs récurrentes imprimable.

**Écarté par l'utilisateur** :
- Mode défi concurrentiel multi-élèves (risque triche).
- Autres matières scolaires (inadaptées au QCM diagnostique).

## Validation + tests

```bash
./validate.js                              # intégrité des pools
./build.sh                                 # rebuild les 12 quiz
# Playwright (après npm install local) :
npx playwright test test.spec.js           # ~25 tests E2E
```
