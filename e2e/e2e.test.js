import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Форма popover', () => {
  let browser;
  let page;
  let server = null;
  const baseUrl = 'http://localhost:8087';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      if (server.connected) {
        process.send('ok');
        resolve();
      } else {
        reject();
      }
    });

    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 200,
      devtools: false, // show devTools
      args: ['--window-size=1000,1000'],
      defaultViewport: {
        width: 1000,
        height: 1000,
      },
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('должен проверить открытие окна popover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('button[class=button]');
    btn.click();
    await page.waitForSelector('div.popover');
  });
});
