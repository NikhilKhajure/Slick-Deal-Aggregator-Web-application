const { fetchDataHeadphones, fetchDataMobiles, fetchDataSpeakers, fetchDataTab, } = require('./Main');

const AllProducts = async () => {
    const pr1 = await fetchDataHeadphones();
    const pr2 = await fetchDataMobiles();
    const pr3 = await fetchDataSpeakers();
    const pr4 = await fetchDataTab();
    const combinedProducts = [...pr1, ...pr2, ...pr3, ...pr4];

    return combinedProducts;
}

module.exports = AllProducts;
