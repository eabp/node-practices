const puppeteer = require('puppeteer');

(async () => {
    console.log('launching a browser');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/Node.js');
    const title = await page.evaluate(() => {
        const span = document.querySelector('.mw-page-title-main');
        console.log(span.innerHTML);
        return span.innerHTML;
    });

    console.log('title', title);
    console.log('closing the browser');
    browser.close();
    console.log('closed browser');
})();