const puppeteer = require("puppeteer");

const scrapeData = async (parameter) => {
    try {
        const URL = parameter[0];
        console.log(`Navigating to URL: ${URL}`);

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Increase the default timeout to 60 seconds
        await page.goto(URL, { waitUntil: 'load', timeout: 60000 });

        // Wait for the description container with an increased timeout
        await page.waitForSelector(".yN+eNk", { timeout: 60000 });

        const productsData = await page.evaluate(() => {
            // Scraping the description
            const descriptionContainer = document.querySelector(".yN+eNk");
            const descriptionContent = descriptionContainer ? descriptionContainer.innerText.trim() : 'No description available';

            // Scraping the offers
            const offersContainer = document.querySelectorAll(".I+EQVr .row");
            const offersData = Array.from(offersContainer).map(offer => ({
                offerType: offer.querySelector(".ynXjOy").textContent.trim(),
                offerDescription: offer.querySelector("span:nth-child(2)").textContent.trim()
            }));

            // Scraping the reviews
            const reviewContainers = document.querySelectorAll(".RcXBOT");
            const reviews = Array.from(reviewContainers).map(reviewContainer => {
                const ratingElement = reviewContainer.querySelector(".XQDdHH img");
                const reviewContentElement = reviewContainer.querySelector(".ZmyHeo > div > div");

                return {
                    rating: ratingElement ? ratingElement.getAttribute('alt') : 'N/A',
                    reviewContent: reviewContentElement ? reviewContentElement.textContent.trim() : 'N/A',
                    reviewerName: reviewContainer.querySelector("._2NsDsF.AwS1CA") ? reviewContainer.querySelector("._2NsDsF.AwS1CA").innerText : 'Anonymous',
                    reviewLocation: reviewContainer.querySelector("#review-b7008546-058c-4b33-b6f5-59b7e4a12eb8 .MztJPv span:nth-child(2)") ? reviewContainer.querySelector("#review-b7008546-058c-4b33-b6f5-59b7e4a12eb8 .MztJPv span:nth-child(2)").innerText : 'Unknown Location',
                    reviewDate: reviewContainer.querySelector("._2NsDsF:last-child") ? reviewContainer.querySelector("._2NsDsF:last-child").innerText : 'Unknown Date'
                };
            });

            return { descriptionContent, offersData, reviews };
        });

        await browser.close();
        console.log(productsData);
        return productsData;
    } catch (error) {
        console.error("Error during scraping:", error);
        return null;
    }
}

// Example usage
// scrapeData(["https://www.flipkart.com/apple-iphone-15-black-128-gb/p/itm6ac6485515ae4"]);
