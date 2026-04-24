# Quiz Collège — radar-college

**20 quiz diagnostiques gratuits pour les collégiens**, de la 6ème à la 3ème, en maths, physique-chimie, SVT, histoire et géographie. Sans pub, sans inscription, sans tracking, libre et open source.

**→ Tester l'app :** [web-developpeur.com/quizz](https://www.web-developpeur.com/quizz)

![CI](https://github.com/ohugonnot/radar-college/actions/workflows/ci.yml/badge.svg)

---

## Pour qui ?

- **Collégiens** qui veulent faire le point avant un contrôle, rattraper des lacunes l'été, ou préparer le brevet.
- **Parents** qui cherchent un outil simple, sans inscription et sans données revendues.
- **Enseignants** qui veulent un support de révision en accès libre à donner à leurs élèves.

## Ce que ça fait

- **30 questions tirées au hasard** dans une banque par quiz, options mélangées — impossible de tricher par cœur.
- **Deux modes** : *Entraînement* avec aide progressive (💡 méthode puis astuce) et *Interrogation* sans aide (timer 30 min en 3ème).
- **Barème style brevet** : +1 pt correct · 0 pt passé · **−0,5 pt faux** — incite à passer plutôt qu'à deviner.
- **Rapport détaillé** après chaque test : note sur 20, diagnostic par chapitre (acquis / fragile / non-acquis), rose des compétences, plan de révision ciblé, relecture possible de chaque test passé.
- **Mémoire long terme (SM-2 light)** : l'app te propose en priorité les questions que tu avais fausses il y a 1j, 3j, 7j, 21j, 60j, 120j — ancrage durable.
- **Schémas visuels** : circuits électriques (série, parallèle, ampèremètre, voltmètre), triangles (Pythagore, Thalès), trigonométrie, fonctions affines, volumes 3D (cylindre, sphère, cône), transformations (symétrie axiale/centrale, translation), propagation lumière + ombres.
- **Dashboard multi-élèves** : stats cumulées, 10 badges (série, polyvalence, progression), courbe chronologique.
- **PWA installable**, **mode sombre**, **police dyslexie**, mobile-first, **export PDF** du rapport.

## Vie privée

- Les résultats sont enregistrés en **localStorage** sur ton appareil.
- Une sauvegarde serveur optionnelle permet de retrouver sa progression sur un autre appareil, indexée par pseudo (pas d'email, pas d'inscription, pas de tracking tiers).
- Aucun cookie, aucun Google Analytics, aucune régie publicitaire.

## Aperçu

<p align="center">
  <img src="docs/01-wizard-matiere.png" alt="Wizard — choix de la matière" width="49%" />
  <img src="docs/02-quiz.png"            alt="Quiz en cours"                width="49%" />
</p>
<p align="center">
  <img src="docs/03-rapport-radar.png"   alt="Rapport avec rose des compétences" width="49%" />
  <img src="docs/04-dashboard.png"       alt="Dashboard multi-matières"          width="49%" />
</p>

<sub>Screenshots régénérables via <code>cd docs && npx playwright test screenshots.spec.js --config=playwright.config.js</code>.</sub>

## Contribuer

Les bienvenues :
- **Issues** : signaler une question ambiguë, une coquille, un chapitre mal couvert.
- **Pull Requests** : ajouter / reformuler des questions, enrichir une fiche mémo, améliorer un schéma SVG.
- **Suggestions** : nouvelle matière, nouveau type d'exercice, fonctionnalité pédagogique.

Zéro friction : pas d'inscription au dépôt, les modifications de questions se font directement dans `quizzes/{matière}-{niveau}.tsx`.

---

## Stack technique

| Domaine       | Choix                                                                          |
|---------------|--------------------------------------------------------------------------------|
| Front         | React 18 (UMD) + **TypeScript** pré-compilé via `@babel/core` (Node au build)  |
| Types         | Types de domaine globaux dans `types.ts` · `tsc --noEmit` en CI                |
| Styles        | Tailwind statique (purgé au build) + CSS custom (design tokens maison)         |
| Routeur       | Hash sémantique maison, compatible `file://` (pushState interdit sur file:)    |
| PWA           | Service Worker (cache-first, CACHE_NAME versionné), manifest.webmanifest       |
| Persistance   | `localStorage` (source de vérité) + PHP plat (JSON par slug élève)             |
| Build         | `build.sh` : pré-compile TSX + inline CSS + bump CACHE_NAME SW                 |
| Tests         | Playwright (Chromium) — 61 scénarios E2E · `test-generators.js` (200 seeds)    |

## Contraintes techniques volontaires

- **Zéro infra** : `scp` le dossier sur un hébergement mutualisé PHP basique, c'est en ligne. Pas de Vercel, pas de Node sur le serveur.
- **File:// compatible** (en développement) : double-clic sur `index.html` après `./build.sh`, ça marche offline. Utile pour filer l'archive à quelqu'un sans wifi.
- **Édition de questions sans pipeline lourd** : les 20 pools de questions (`quizzes/*.tsx`) s'éditent direct, `./build.sh` inline le tout dans `index.html`. Un parent ou prof non-dev peut corriger une coquille.
- **Pas de tracking** : aucune requête vers un domaine tiers, pas de Google Analytics, pas d'ads.

## Architecture

SPA mono-HTML. Un seul `index.html` déployé, construit par `build.sh` à partir de :

```
index.html           template (wizard vanilla JS + markers d'inclusion)
app.tsx              logique React partagée (HomeScreen, QuizScreen, ReportScreen…)
app.css              styles du quiz React (incluant @media print pour l'export PDF)
types.ts             types de domaine globaux (QuizConfig, Attempt, AnalyzeResult…)
quizzes/
  _svg-kit.tsx       primitives SVG réutilisables (circuits, triangles, volumes 3D, …)
  {maths|physique|svt|histoire|geo}-{3|4|5|6}.tsx   20 fichiers, un par quiz
build.sh             pré-compile + concat + bump CACHE_NAME
tsconfig.json        strict-progressif
```

### Routeur hash sémantique

`location.hash` plutôt que `history.pushState` (interdit sur file://).

| Route                                            | Effet                                           |
|--------------------------------------------------|-------------------------------------------------|
| `#/prenom`, `#/niveau`, `#/apropos`              | Étapes wizard + page À propos                   |
| `#/{N}eme` (N ∈ 3..6)                            | Sélection matière pour la classe N              |
| `#/{N}eme/{maths\|physique\|svt\|histoire\|geo}` | Monte le quiz React pour `{subject}-{N}`        |
| `#/{N}eme/{subject}/report/<ISO>`                | Deep-link vers un rapport archivé (relecture)   |
| `#/dashboard`                                    | Tableau de bord cross-matière                   |

### Isolation scope vanilla ↔ React

Le routeur vanilla d'`index.html` et `app.tsx` partagent la même page. Pour éviter les collisions (`ALL_BADGES`, `slugName`, `showToast`…), **`app.tsx` est wrappé dans une IIFE**. Communication via `window` :

- `window.mountQuizApp(key, {reportAt})` / `window.unmountQuizApp()` exposés par `app.tsx`
- `window.CircuitKit` exposé par `quizzes/_svg-kit.tsx` — composants SVG partagés entre MEMO (app.tsx) et énoncés (quizzes)
- `window.__pendingQuizMount` : queue pour gérer la race condition au chargement

## Démarrer en local

```bash
# Prérequis : Python 3 + Node 20 + npm
npm install
npx playwright install chromium --with-deps

# Build (pré-compile TSX, inline CSS/JS dans index.html, bump CACHE_NAME SW)
./build.sh

# Validation d'intégrité des pools
npm run validate

# Type-check (mêmes règles que la CI)
npm run typecheck

# Serve + tester
npm run serve &
npm test
```

Sans serveur : **double-clic sur `index.html`** après `./build.sh`. Le service worker et la sync serveur se désactivent automatiquement en `file://`.

## Ajouter / modifier un quiz

Les questions sont dans `quizzes/{matière}-{niveau}.tsx`. Chaque fichier contient un appel `window.ALL_QUIZZES['{matière}-{niveau}'] = { SUBJECT, DOMAINS, POOL, PICK, PLANS }`. Après édition : `./build.sh` puis `npm run validate` pour vérifier l'intégrité (clés uniques, `PICK = 30`, `correct` valide, pas de doublons d'options).

Questions paramétriques (gens) : testées par `node test-generators.js` qui lance 200 seeds par générateur et vérifie déterminisme, variabilité, absence d'options doublons.

## Tests

```bash
npm test                 # 61 scénarios Playwright (~2 min, headless Chromium)
npm run test:headed      # visible (debug)
node test-generators.js  # 200 seeds par gen, signale options doublons et variabilité faible
```

Pre-commit hook : lance `validate.js` + `test-generators.js` sur les fichiers staged ; échoue s'il y a un bug (pas sur les warnings de variabilité).

## Déploiement

```bash
./build.sh
# Upload : index.html + sw.js + manifest.webmanifest + icon.svg + save.php + load.php + sitemap.xml + robots.txt
# Protéger data/ côté hébergeur (ex: .htaccess Deny) — save.php y écrit les JSON élèves.
```

C'est tout : pas de process Node, pas de rewrite rules, pas de base de données.

## TODO / idées futures

Pistes identifiées, par ordre d'effort croissant. Rien d'urgent — ajouts à faire au fil de l'usage.

### Petit (10-15 min chacun)

- **Bandeau visuel « mode Examen »** sur le brevet blanc : liseré rouge, pas d'indices accessibles, décompte visible en permanence.
- **Timer strict 90 min** sur la simulation brevet blanc (actuellement le timer 3ème de 30 min hérite — pas adapté au composite).
- **Progression brevet blanc sur le dashboard** : carte « Tu as fait N brevets blancs · dernière note X/20 · meilleure Y/20 ».
- **Lien « Fiche révise globale »** depuis le dashboard : agrège les wrong-trackers de tous les quizzes actifs (pas seulement le courant).
- **Révision ciblée d'un chapitre** depuis le rapport : bouton « Refaire 10 questions de {chapitre fragile} » en un clic.

### Moyen (30-60 min)

- **Stats anonymes self-hosted** (Plausible ou Umami) pour mesurer l'adoption sans tracker tiers.
- **Export PDF amélioré** via lib dédiée (jsPDF) si la conversion « Imprimer → PDF » navigateur montre ses limites sur certains layouts.
- **Audit a11y** : vérification WCAG AA (contrastes, ARIA, navigation clavier complète).
- **Web Manifest enrichi** : catégories (education), screenshots, description locale, shortcuts (brevet blanc, fiche révise).
- **Bouton « Copier ma fiche révise en markdown »** pour la coller dans un doc / envoyer par mail / WhatsApp.

### Gros (plusieurs heures)

- **Extension Lycée 2de / 1re** : nouveau niveau × matière. Structure prête, c'est surtout du contenu.
- **Tableau de bord parent / prof multi-élèves** : vue agrégée sur plusieurs pseudos enregistrés sur l'appareil.
- **Mode « challenge hebdo »** : 10 questions fraîches chaque semaine, rétention via streak.
- **Comparaison classe** (avec opt-in explicite + anonymisation) : où se situe ton score par rapport à la moyenne des autres utilisateurs du niveau ? Implique un backend plus riche que le PHP plat actuel.

### Idées écartées

Volontairement hors scope de ce projet pédagogique familial :

- **Mode compétitif / classement public** : risque triche + comparaison malsaine.
- **Autres matières scolaires** (français, anglais, EMC…) : mal servies par le format QCM diagnostique. L'histoire et la géographie restent sous un angle « faits & repères » qui se prête au QCM ; la rédaction ou la langue vivante ne s'évaluent pas comme ça.
- **Module d'authentification / comptes utilisateurs** : volontairement absent. Un pseudo local suffit.
- **Lib math runtime (KaTeX, MathJax)** : unicode + helper `F` couvre 100 % du programme collège. +270 KB bundle non justifiés.
- **Schémas géométriques dynamiques (JSXGraph)** : overkill pour le niveau collège, les SVG statiques suffisent.

## Licence

[MIT](LICENSE) — fais-en bon usage pédagogique.
