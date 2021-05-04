describe('Home', () => {
  it('should be titled "Caring Child Daycare"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8898/daycare', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('Caring Child Daycare');
  });
});

// eslint-disable-next-line jest/no-export
export {};
