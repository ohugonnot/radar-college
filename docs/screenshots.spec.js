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
  // Seed un attempt avec de VRAIES clés du pool maths-4. En omettant `order`,
  // rebuildFromAttempt utilise le fallback `ans = ok ? correctIdx : (correctIdx+1)%N`
  // — chaque ok:true devient donc une réponse exacte après rebuild,
  // et l'analyse recalcule une note cohérente (≈ 14/20 ici).
  const FIXED = '2026-04-20T10:30:00.000Z';
  await page.addInitScript((date) => {
    localStorage.setItem('quiz-active-student', JSON.stringify({ name: 'Alice', slug: 'alice' }));
    // 30 questions sur tous les domaines de maths-4, réussites variées
    // pour que le radar dessine de vraies pointes et creux.
    const plan = [
      ['rel-1', true], ['rel-2', true], ['rel-3', true], ['rel-4', true],
      ['fra-1', true], ['fra-2', true], ['fra-3', false],
      ['pui-1', true], ['pui-2', false], ['pui-3', false],
      ['lit-1', true], ['lit-2', true], ['lit-3', true],
      ['pyt-1', true], ['pyt-2', true], ['pyt-3', true],
      ['tha-1', true], ['tha-2', false],
      ['tri-1', true], ['tri-2', true], ['tri-3', false],
      ['gra-1', true], ['gra-2', true],
      ['pro-1', true], ['pro-2', true], ['pro-3', true],
      ['tra-1', true], ['tra-2', false],
      ['pb-1',  true], ['pb-2',  true],
    ];
    const correct = plan.filter(p => p[1]).length;
    const wrong = plan.length - correct;
    const note = +(Math.max(0, (correct - 0.5 * wrong) / plan.length) * 20).toFixed(2);
    const log = plan.map(([key, ok], i) => ({
      pos: i + 1, key, domain: '',
      given: ok ? 0 : 1, correct: 0,
      ok, ms: 2400 + (i * 190) % 3500, hinted: false,
    }));
    const hist = { alice: { name: 'Alice', klass: '4ème', attempts: [{
      date, mode: 'training', note, noteRaw: note,
      correct, total: plan.length, totalMs: 505000,
      domains: {}, log,
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
