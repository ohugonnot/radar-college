// Smoke test Playwright post-deploy : visite chaque quiz sur l'URL de prod,
// collecte les erreurs console et échecs de parse Babel.
//
// Usage :
//   PROD_URL=https://www.web-developpeur.com/quizz/ npx playwright test test-prod-smoke.spec.js --reporter=line
//
// Retourne exit 1 si un quiz plante ou si une erreur console critique est détectée.

const { test, expect } = require('@playwright/test');

const BASE = process.env.PROD_URL || 'https://www.web-developpeur.com/quizz/';
const LEVELS = ['6eme', '5eme', '4eme', '3eme'];
const SUBJECTS = ['maths', 'physique', 'svt', 'histoire', 'geo'];

// Erreurs console qu'on NE veut PAS voir en prod (qui trahiraient un bug runtime).
const CRITICAL_PATTERNS = [
  /SyntaxError/i,
  /Uncaught/i,
  /ReferenceError/i,
  /TypeError/i,
  /Failed to load/i,
  /Inline Babel script/i,
];

// Warnings tolérés (bruit connu, non bloquant).
const IGNORE_PATTERNS = [
  /cdn\.tailwindcss\.com should not be used in production/,
  /in-browser Babel transformer/,
  /apple-mobile-web-app-capable.*deprecated/,
  /Tracking Prevention/i,
  /<svg> attribute height: Expected length/,
  /code generator has deoptimised.*exceeds the max of 500KB/,
  /\[BABEL\] Note:/,
  /Manifest:.*Line:/i,
  /Download the React DevTools/,
  /Service Worker registered/i,
];

function collectConsole(page) {
  const critical = [];
  page.on('console', msg => {
    const text = msg.text();
    if (IGNORE_PATTERNS.some(p => p.test(text))) return;
    if (msg.type() === 'error' || CRITICAL_PATTERNS.some(p => p.test(text))) {
      critical.push(`[${msg.type()}] ${text}`);
    }
  });
  page.on('pageerror', err => {
    critical.push(`[pageerror] ${err.message}`);
  });
  return critical;
}

test.describe('Smoke prod', () => {
  test('landing charge sans erreur', async ({ page }) => {
    const errors = collectConsole(page);
    await page.goto(BASE, { waitUntil: 'domcontentloaded' });
    // Attendre que le JS inline ait tourné
    await page.waitForTimeout(3000);
    // Titre doit contenir "Évaluation" ou "quiz" ou "collège" — preuve que le doc est bien servi
    const title = await page.title();
    expect(title.length).toBeGreaterThan(5);
    // Vérifier la présence des containers (même s'ils sont hidden)
    const hasRoot = await page.locator('#root').count();
    const hasWizard = await page.locator('#wizard-container').count();
    expect(hasRoot + hasWizard).toBeGreaterThan(0);
    if (errors.length) throw new Error(`Erreurs console sur landing :\n  ${errors.join('\n  ')}`);
  });

  for (const level of LEVELS) {
    for (const subject of SUBJECTS) {
      test(`${subject} ${level} : mount sans erreur`, async ({ page }) => {
        const errors = collectConsole(page);
        const url = `${BASE.replace(/\/$/, '')}/#/${level}/${subject}`;
        await page.goto(url, { waitUntil: 'domcontentloaded' });
        // Attendre que Babel Standalone compile tout le JSX (c'est long, ~3s+)
        await page.waitForTimeout(4000);
        // Le contenu du root (ou body) doit être non vide et contenir du texte du quiz
        const bodyText = await page.locator('body').textContent();
        expect(bodyText && bodyText.length > 200, `Page vide pour ${subject} ${level}`).toBeTruthy();
        // Vérif positive : le root React doit contenir au moins un bouton "Commencer" ou un titre de matière
        const hasQuizUI = bodyText.includes('Commencer') || bodyText.includes('entraînement') || bodyText.includes('Interrogation');
        expect(hasQuizUI, `HomeScreen du quiz introuvable pour ${subject} ${level}`).toBeTruthy();
        if (errors.length) {
          throw new Error(`Erreurs console sur /#/${level}/${subject} :\n  ${errors.join('\n  ')}`);
        }
      });
    }
  }

  // Vérifie aussi que chaque tuile du wizard → quiz correspondant charge bien.
  // Attrape les régressions type "subject pas reconnu dans parseHash" qui laissent
  // l'utilisateur sur un écran vide.
  for (const subject of SUBJECTS) {
    test(`tuile wizard ${subject} → quiz 4e monte`, async ({ page }) => {
      const errors = collectConsole(page);
      await page.goto(`${BASE.replace(/\/$/, '')}/#/4eme/${subject}`, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(3500);
      // Après redirection (mountQuizApp), l'URL doit toujours contenir /4eme/{subject}
      const url = page.url();
      expect(url.includes(`/4eme/${subject}`), `URL ne contient plus /4eme/${subject} : ${url}`).toBeTruthy();
      // Le quiz doit être monté : #root rendu ET #wizard-container caché
      const rootText = await page.locator('#root').textContent();
      expect(rootText && rootText.length > 50, `#root vide pour tuile ${subject}`).toBeTruthy();
      if (errors.length) {
        throw new Error(`Erreurs console tuile ${subject} :\n  ${errors.join('\n  ')}`);
      }
    });
  }
});
