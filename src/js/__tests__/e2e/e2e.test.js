import puppeteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout
describe('Форма popover', () => {
  let browser;
  let page;
  const baseUrl = 'http://localhost:9000';

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test('должен проверить открытие окна popover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('button[class=button]');
    btn.click();
    await page.waitForSelector('div.popover');
  });

  afterAll(async () => {
    await browser.close();
  });
});
