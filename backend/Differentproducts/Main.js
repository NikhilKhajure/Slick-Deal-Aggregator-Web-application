const puppeteer = require("puppeteer");
const main = async (URL) => {
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
}

const tabs = async () => { return await main("https://www.xerve.in/prices/s-tablets") };
const fetchDataTab = async () => {
    let data = await tabs();
    // console.log(data);
    return data;
};
const Mobiles = async () => { return await main("https://www.xerve.in/prices/s-mobiles") };
const fetchDataMobiles = async () => {
    let data = await Mobiles();
    // console.log(data);
    return data;
};
const Speakers = async () => { return await main("https://www.xerve.in/prices/s-home-audio-and-speakers") };
const fetchDataSpeakers = async () => {
    let data = await Speakers();
    // console.log(data);
    return data;
};
const Headphones = async () => { return await main("https://www.xerve.in/prices/s-home-audio-and-speakers") };
const fetchDataHeadphones = async () => {
    let data = await Headphones();
    // console.log(data);
    return data;
};
module.exports = {
    fetchDataTab,
    fetchDataMobiles,
    fetchDataSpeakers,
    fetchDataHeadphones
};