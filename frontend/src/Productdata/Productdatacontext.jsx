import { createContext, useEffect, useState } from "react";
import prdata from "./Maindata";
import PrReview from "./Reviews";
import all from "./data";
const Datacontext = createContext({
    Productdata: "",
    HandleViewCard: () => { },
    ViewProduct: null,
    HandleCartData: () => { },
    CartData: [],
    CartAddedMessage: "",
    CartMessage: "",
    HandleCartMessages: () => { },
    Productreviews: "",
    HandleProductComparison: () => { },
    HandleUserSearch: () => { },
    Allproducts: "",
    HandleHeaderItems: () => { },
    HandleDeleteProduct: () => { },
    comparisonProducts: "",
    HandleCompareProducts: () => { },
    HandleSortElement: () => { },
    HandleSort: "",
    getProductUrl: () => { }
});
const Productdataprovider = ({ children }) => {
    const [Allproducts, setAllproducts] = useState(undefined);
    const HOST_URI = "http://localhost:8000/";
    const getAllProducts = async () => {
        let result = await fetch(`${HOST_URI}allproducts`);
        result = await result.json();
        setAllproducts(result);
        // console.log(result);
    }
    useEffect(() => {
        getAllProducts();
    }, []);
    const [Productdata, setProductdata] = useState(undefined);
    console.log(Productdata)
    const getProductUrl = (value) => {
        // console.log(value);
        // const getData = async (parameter) => {
        //     let result = await fetch(`http://localhost:8000/flipkart?q=${parameter}`);
        //     result = await result.json();
        //     setProductdata(result);
        // }
    }

    const getHeaderData = async (parameter) => {
        let result = await fetch(`${HOST_URI}headerdata/?q=${parameter}`);
        result = await result.json();
        setProductdata(result);
        console.log(Productdata);
    }
    const getFlipkartData = async (parameter) => {
        let result = await fetch(`${HOST_URI}?q=${parameter}`);
        result = await result.json();
        setProductdata(result);
    }
    const [userInput, setUserInput] = useState("iphone 15");
    const HandleUserSearch = (value) => {
        setProductdata([]);
        console.log(value);
        if (value === "") {
            setUserInput("iphone 15");
        } else {
            setUserInput(value);
        }
    }
    useEffect(() => {
        // getData(userInput);
        getFlipkartData(userInput);
    }, [userInput]);
    const [ViewProduct, setViewProduct] = useState(null);
    const [CartData, setCartData] = useState([]);
    const [CartAddedMessage, setCartAddedMessage] = useState(false);
    const [CartMessage, setCartMessage] = useState(false);
    const [Productreviews, setProductreviews] = useState(PrReview);
    const HandleViewCard = (name) => {
        let data = Productdata.filter((value) => value.productName === name);
        if (data.length === 0) {
            let data = Allproducts.filter((value) => value.productName === name);
            setViewProduct(data);
            return;
        }
        setViewProduct(data);
    }
    const [headerData, setHeaderData] = useState("");
    const HandleHeaderItems = (value) => {
        // console.log(value);
        setHeaderData(value);
    }
    useEffect(() => {
        getHeaderData(headerData);
    }, [headerData]);
    const HandleCartData = (name) => {
        let filteredProduct = Productdata.find((value) => value.productName === name);
        if (filteredProduct === undefined) {
            filteredProduct = Allproducts.find((value) => value.productName === name);
        }
        const isAlreadyInCart = CartData.some(item => item.productName === name);
        setCartAddedMessage(isAlreadyInCart);
        setCartMessage(true);
        if (!isAlreadyInCart && filteredProduct) {
            setCartData(prevCartData => {
                return [...prevCartData, filteredProduct];
            });
        }
    }
    const [comparisonProducts, setcomparisonProducts] = useState(undefined);
    const HandleDeleteProduct = (name) => {
        // deletion code
        const deletedData = CartData.filter((value) => !name.includes(value.productName));
        // console.log("Cart Data");
        // console.log(CartData);
        // console.log("Filtered Data")
        // console.log(deletedData);
        setCartData(deletedData);
    }
    const HandleCompareProducts = (name) => {
        const compar = CartData.filter((value) => name.includes(value.productName));
        setcomparisonProducts(compar);
    }
    const HandleCartMessages = (value) => {
        setCartMessage(false);
    }

    const HandleProductComparison = () => {
        const findLowestPriceSeller = () => {
            if (!ViewProduct || !ViewProduct[0].sellerPrices) return null;

            let lowestPriceSeller = ViewProduct[0].sellerPrices[0];
            ViewProduct[0].sellerPrices.forEach((seller) => {
                const price = parseInt(seller.sellerPrice.replace(/,/g, ''), 10);
                const lowestPrice = parseInt(lowestPriceSeller.sellerPrice.replace(/,/g, ''), 10);

                if (price < lowestPrice) {
                    lowestPriceSeller = seller;
                }
            });

            return lowestPriceSeller;
        };
        const lowestPriceSeller = findLowestPriceSeller();
        // console.log(lowestPriceSeller);

        const evaluateCamera = () => {
            try {
                if (!ViewProduct || !ViewProduct[0].sellerPrices) return null;
                const cameraFeatures = ViewProduct[0].productFeatures.find(feature => feature.toLowerCase().includes('camera'));
                if (cameraFeatures) {
                    const megapixels = parseInt(cameraFeatures.match(/\d+/)[0]);
                    if (megapixels >= 12) {
                        return "Good camera quality";
                    } else {
                        return "Average camera quality";
                    }
                } else {
                    return "Camera information not available";
                }
            } catch (error) {
                if (error) {
                    return "Information Not Available";
                }
            }
        };
        const CammesQuality = evaluateCamera();
        // console.log(CammesQuality);
        const evaluateRAM = () => {
            try {
                const ramFeatures = ViewProduct[0].productFeatures.find(feature => feature.toLowerCase().includes('ram'));
                if (ramFeatures) {
                    const ramSize = parseInt(ramFeatures.match(/\d+/)[0]);
                    if (ramSize >= 8) {
                        return "Sufficient RAM for multitasking";
                    } else {
                        return "Consider upgrading for better performance";
                    }
                } else {
                    return "RAM information not available";
                }
            } catch (error) {
                if (error) {
                    return "Information Not Available";
                }
            }
        };
        const RamQuality = evaluateRAM();
        // console.log(RamQuality);
        const evaluateROM = () => {
            try {
                const romFeatures = ViewProduct[0].productFeatures.find(feature => feature.toLowerCase().includes('rom'));
                if (romFeatures) {
                    const romSize = parseInt(romFeatures.match(/\d+/)[0]);
                    // You can set criteria for ROM size as per your requirement
                    if (romSize >= 128) {
                        return "Sufficient storage capacity";
                    } else {
                        return "Consider upgrading for more storage";
                    }
                } else {
                    return "ROM information not available";
                }
            } catch (error) {
                if (error) {
                    return "Information Not Available";
                }
            }
        };
        const RomQuality = evaluateROM();
        // console.log(RomQuality);
        const evaluateBattery = () => {
            try {
                const batteryFeatures = ViewProduct[0].productFeatures.find(feature => feature.toLowerCase().includes('battery'));
                if (batteryFeatures) {
                    // Assuming the battery capacity is mentioned in mAh (milliampere-hour)
                    const batteryCapacity = parseInt(batteryFeatures.match(/\d+/)[0]);
                    // You can set criteria for battery capacity as per your requirement
                    if (batteryCapacity >= 4000) {
                        return "Long-lasting battery life";
                    } else {
                        return "Consider a device with a larger battery capacity";
                    }
                } else {
                    return "Battery information not available";
                }
            } catch (error) {
                if (error) {
                    return "Information Not Available";
                }
            }
        };
        const BattaryQuality = evaluateBattery();
        // console.log(BattaryQuality);
        const ProductQuality = [{ lowestPriceSeller, RamQuality, RomQuality, BattaryQuality, CammesQuality }];
        return ProductQuality;
        // console.log(ProductQuality);
    }
    // console.log(HandleProductComparison());
    const [HandleSort, setHandleSort] = useState(10);
    const HandleSortElement = (value) => {
        setHandleSort(value);
    }
    return <Datacontext.Provider value={{ Productdata, Productreviews, HandleViewCard, ViewProduct: ViewProduct, CartData, HandleCartData, CartAddedMessage, CartMessage, HandleCartMessages, HandleProductComparison, HandleUserSearch, Allproducts, HandleHeaderItems, HandleDeleteProduct, comparisonProducts, HandleCompareProducts, HandleSortElement, HandleSort, getProductUrl }}> {children} </Datacontext.Provider>
}

export default Productdataprovider;
export { Datacontext };