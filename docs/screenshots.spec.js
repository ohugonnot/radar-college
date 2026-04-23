// Script Playwright pour générer les screenshots du README.
// Usage : npx playwright test docs/screenshots.spec.js --config=playwright.config.js --reporter=list
const { test } = require('@playwright/test');
const BASE = process.env.TEST_BASE || 'http://127.0.0.1:8765';

test.use({ viewport: { width: 1280, height: 860 } });

test('01 — wizard étape matière', async ({ page }) => {
  await page.goto(BASE + '/index.html');
  await page.fill('#name-input', 'Alice');
  await page.click('#name-next');
  await page.locator('#level-list .choice', { hasText: '4ème' }).click();
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'docs/01-wizard-matiere.png', fullPage: false });
});

test('02 — quiz (question active)', async ({ page }) => {
  // Seed un prénom pour sauter la landing
  await page.addInitScript(() => {
    localStorage.setItem('quiz-active-student', JSON.stringify({ name: 'Alice', slug: 'alice' }));
    localStorage.setItem('quiz-active-level', '4');
  });
  await page.goto(BASE + '/index.html#/4eme/maths');
  await page.waitForTimeout(2000);
  // Remplir prénom dans le HomeScreen du quiz (au cas où) et lancer
  const nameInput = page.locator('#root input[type="text"]').first();
  if (await nameInput.inputValue() === '') await nameInput.fill('Alice');
  await page.getByRole('button', { name: /Commencer/ }).click();
  await page.waitForTimeout(500);
  // Sélectionne une option pour l'effet visuel
  await page.locator('.option').first().click();
  await page.waitForTimeout(200);
  await page.screenshot({ path: 'docs/02-quiz.png', fullPage: false });
});

test('03 — rapport avec radar', async ({ page }) => {
  // Seed un attempt factice avec log réel pour déclencher le mode historique
  const FIXED = '2026-04-20T10:30:00.000Z';
  await page.addInitScript((date) => {
    localStorage.setItem('quiz-active-student', JSON.stringify({ name: 'Alice', slug: 'alice' }));
    // Construit un log varié : 22 bonnes, 5 mauvaises, 3 passées sur maths-4 (clés réelles du pool)
    const keys = ['rel-1','rel-2','rel-3','rel-4','pot-1','pot-2','pot-3','pot-4','pot-5','pyt-1','pyt-2','pyt-3','pyt-4','tha-1','tha-2','tha-3','sta-1','sta-2','sta-3','pro-1','pro-2','pro-3','lit-1','lit-2','lit-3','eqn-1','eqn-2','vol-1','vol-2','vol-3'];
    // 20 bonnes (given = correct index via order mapping), 5 mauvaises, 5 passées
    const log = keys.map((k, i) => {
      const base = { pos: i+1, key: k, domain: 'relatifs', ok: true, ms: 2000 + i*100, hinted: false, order: [0,1,2,3] };
      if (i < 20) return { ...base, given: 0, correct: 0, ok: true };   // assume first option is correct after order mapping
      if (i < 25) return { ...base, given: 1, correct: 0, ok: false };  // wrong
      return { ...base, given: null, correct: 0, ok: false };            // skipped
    });
    const hist = { alice: { name: 'Alice', klass: '4ème', attempts: [{
      date, mode:'training', note: 14.5, noteRaw: 13.8,
      correct: 20, total: 30, totalMs: 480000, domains: {}, log,
    }] } };
    localStorage.setItem('quiz-maths-4-history-v1', JSON.stringify(hist));
  }, FIXED);
  await page.goto(BASE + '/index.html#/4eme/maths/report/' + encodeURIComponent(FIXED));
  await page.waitForTimeout(2500);
  // Scrolle jusqu'au radar
  const radar = page.getByText('Profil de compétences').first();
  if (await radar.count() > 0) await radar.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'docs/03-rapport-radar.png', fullPage: false });
});

test('04 — dashboard multi-matières', async ({ page }) => {
  // Seed plusieurs attempts pour avoir des stats + badges à montrer
  await page.addInitScript(() => {
    const slug = 'alice';
    localStorage.setItem('quiz-active-student', JSON.stringify({ name: 'Alice', slug }));
    localStorage.setItem('quiz-active-level', '4');
    const mkAttempt = (note, date, mode='training') => ({
      date, mode, note, noteRaw: note - 0.5,
      correct: Math.round(note * 1.5), total: 30, totalMs: 520000, domains: {}, log: [],
    });
    const attempts = [
      mkAttempt(11.5, '2026-04-05T14:20:00.000Z'),
      mkAttempt(13.2, '2026-04-10T16:10:00.000Z'),
      mkAttempt(15.1, '2026-04-18T09:30:00.000Z', 'exam'),
    ];
    localStorage.setItem('quiz-maths-4-history-v1', JSON.stringify({ [slug]: { name:'Alice', klass:'4ème', attempts } }));
    localStorage.setItem('quiz-physique-4-history-v1', JSON.stringify({ [slug]: { name:'Alice', klass:'4ème', attempts: [mkAttempt(12.8, '2026-04-15T11:00:00.000Z')] } }));
    localStorage.setItem('quiz-svt-4-history-v1', JSON.stringify({ [slug]: { name:'Alice', klass:'4ème', attempts: [mkAttempt(16.2, '2026-04-20T10:00:00.000Z', 'exam')] } }));
  });
  await page.goto(BASE + '/index.html#/dashboard');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'docs/04-dashboard.png', fullPage: false });
});
