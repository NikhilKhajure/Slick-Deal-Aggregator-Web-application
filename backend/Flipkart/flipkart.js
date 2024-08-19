const puppeteer = require("puppeteer");

const Flipkartmain = async (parameter) => {
    const url = `https://www.flipkart.com/search?q=${parameter}`;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const productsData = await page.evaluate(() => {
        const products = document.querySelectorAll("div._75nlfW");
        return Array.from(products).slice(0, 10).map(product => {
            let productName = product.querySelector("div.KzDlHZ")?.textContent.trim() || 'N/A';
            let productImage = product.querySelector("img.DByuf4")?.getAttribute('src') || 'N/A';
            let productUrl = product.querySelector("a.CGtC98")?.getAttribute('href') || 'N/A';
            let productRating = product.querySelector("div._5OesEi")?.querySelector("span.XQDdHH")?.textContent.trim() || 'N/A';
            let ratingCountReview = product.querySelector("div._5OesEi")?.querySelector("span.Wphh3N")?.textContent.trim() || 'N/A';
            let productFeatures = Array.from(product.querySelectorAll("div._6NESgJ > ul.G4BRas > li")).map(feature => feature.textContent.trim()) || [];
            let productPrice = product.querySelector("div.hl05eU")?.textContent.trim() || 'N/A';
            let productPreviousPrice = product.querySelector("div.yRaY8j")?.textContent.trim() || 'N/A';
            let productDiscount = product.querySelector("div.UkUFwK > span")?.textContent.trim() || 'N/A';
            let deliveryDetails = product.querySelector("div.k6cAZE")?.textContent.trim() || 'N/A';

            return {
                productName,
                productImage,
                productUrl,
                productRating,
                ratingCountReview,
                productFeatures,
                productPrice,
                productPreviousPrice,
                productDiscount,
                deliveryDetails
            };
        });
    });


    await browser.close();
    // console.log(productsData);
    return productsData;
}

// Flipkartmain("iphone+15");
module.exports = Flipkartmain;
