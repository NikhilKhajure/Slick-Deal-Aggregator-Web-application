const puppeteer = require("puppeteer");
const flipkartdata = require("./Flipkart/flipkart");
const main = async (prname) => {
    const url = `https://www.xerve.in/prices?q=${prname}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const productsData = await page.evaluate(() => {
        const products = document.querySelectorAll("._list--grid");
        return Array.from(products).slice(0, 10).map(product => {
            let productName = product.querySelector("h3.I-name__heading").textContent.trim();
            let productImage = product.querySelector(".St-Img-M img").getAttribute('src');
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

    let arr1 = productsData; // Return the data instead of logging it
    let arr2 = await flipkartdata(prname);
    const arr3 = JSON.parse(JSON.stringify(arr1));
    // console.log("Flipkart Data");
    // console.log(arr2);

    // Combine data from arr2 into arr3
    arr3.forEach((item, index) => {
        // Add properties from arr2 to corresponding item in arr3
        Object.assign(item, {
            productRatingCount: arr2[index]?.productRatingCount,
            productFeatures: arr2[index]?.productFeatures,
            productPreviousPrice: arr2[index]?.productPreviousPrice,
            productUrl: arr2[index]?.productUrl,
            productDiscount: arr2[index]?.productDiscount,
            deliveryDetails: arr2[index]?.deliveryDetails
        });
    });
    return arr3;
}
module.exports = main;
