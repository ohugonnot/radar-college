module.exports = {
  testDir: '.',
  testMatch: /.*\.spec\.js/,
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
  reporter: [['list']],
  workers: 1,
};
