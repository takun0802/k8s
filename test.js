const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://a46c8267f8b5a46e1a8d9e3e87cbe44d-944449116.ap-northeast-1.elb.amazonaws.com/');
  const content = await page.content();
  if (content.includes('Welcome')) {
    console.log('Test Passed: "Welcome" found on the page.');
  } else {
    console.error('Test Failed: "Welcome" not found on the page.');
    process.exit(1);
  }

  await browser.close();
})();