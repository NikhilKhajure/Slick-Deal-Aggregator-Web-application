import React, { useEffect, useState } from 'react'

function HomeDemo() {
    const [Products, setProducts] = useState("");
    const getData = async () => {
        let result = await fetch("http://localhost:8000/");
        result = await result.json();
        setProducts(result);
    }
    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div>
                {!Products ? <h1>Not Found</h1> : Products.map((data) => {
                    return <>
                        <img src={data.productImage} style={{ width: "300px" }} alt="" />
                        <h1> {data.productName} : {data.ProductPrice} </h1>
                        <div>
                            {data.sellerPrices.map((value) => {
                                return <span> {value.sellerName} : <span> {value.sellerPrice} </span> </span>
                            })}
                        </div>
                    </>
                })}
            </div>
        </>
    )
}

export default HomeDemo
