const puppeteer = require("puppeteer");

const url = "https://www.flipkart.com/samsung-galaxy-s23-ultra-5g-green-256-gb/p/itm77dc35f7779a4?";

const main = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    try {
        const productsData = await page.evaluate(() => {
            const reviewContainers = document.querySelectorAll("._16PBlm");

            const reviews = [];
            reviewContainers.forEach(reviewContainer => {
                const ratingElement = reviewContainer.querySelector("._3LWZlK._1BLPMq");
                const reviewContentElement = reviewContainer.querySelector(".t-ZTKy > div > div");

                if (ratingElement && reviewContentElement) {
                    const rating = ratingElement.textContent.trim();
                    const reviewContent = reviewContentElement.textContent.trim();
                    reviews.push({ rating, reviewContent });
                }
            });
            return reviews;
        });

        // console.log("Reviews Data:", productsData);
    } catch (error) {
        console.error("Error:", error.message);
    }

    await browser.close();
}

main();
