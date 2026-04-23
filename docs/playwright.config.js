module.exports = {
  testDir: '.',
  testMatch: 'screenshots.spec.js',
  timeout: 30000,
  retries: 0,
  use: { headless: true, viewport: { width: 1280, height: 860 } },
  reporter: [['list']],
  workers: 1,
};
