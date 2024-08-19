const puppeteer = require("puppeteer");

const url = "https://www.flipkart.com/apple-iphone-13-starlight-128-gb/p/itmc9604f122ae7f?";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const productMultipleImages = await page.evaluate(() => {
        const imageContainers = document.querySelectorAll("._35DpL- ._2E1FGS img.q6DClP");
        const data = Array.from(imageContainers).map(img => img.getAttribute('src'));
        return data;
    });

    await browser.close();

    console.log(productMultipleImages);
}

main();
