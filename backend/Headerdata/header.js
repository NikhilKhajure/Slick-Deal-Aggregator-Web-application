const puppeteer = require("puppeteer");
const main = async (parameter) => {
    const URL = `https://www.xerve.in/prices/s-${parameter}`
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: 'networkidle2' });
    // await page.screenshot({ path: "sc.png" });

    const productsData = await page.evaluate(() => {
        const products = document.querySelectorAll("._list--view ._list--grid");
        return Array.from(products).slice(0, 40).map(product => {
            let productName = product.querySelector("._detail__ h6")?.textContent?.trim() || "N/A";
            let productImage = product.querySelector("img.img-responsive-list-desk").getAttribute('src');
            let sellerPrices = Array.from(product.querySelectorAll(".compgrid")).map(seller => {
                let sellerName = seller.querySelector("img").getAttribute("title");
                let sellerLogo = seller.querySelector("img").getAttribute("src");
                let sellerPrice = seller.querySelector("h4").textContent.trim();
                return { sellerName, sellerLogo, sellerPrice };
            });
            return { productName, productImage, sellerPrices };
        });
    });

    await browser.close();
    return productsData;
    // console.log(productsData);
}
// main();
module.exports = main;