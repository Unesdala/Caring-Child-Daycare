import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('Home', () => {
  it('should be titled "Caring Child Daycare"', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:8888/daycare/', {
      waitUntil: 'load',
    });
    await expect(page.title()).resolves.toMatch('Caring Child Daycare');
  });
});
