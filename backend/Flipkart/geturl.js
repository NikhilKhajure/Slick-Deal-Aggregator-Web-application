const Flipkart = require("./flipkart");

const getUrl = async () => {
    const data = await Flipkart();
    console.log(data[0].productUrl);
    return data[0].productUrl;
}
module.exports = getUrl;