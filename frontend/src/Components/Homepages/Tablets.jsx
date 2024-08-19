import React, { useContext, useEffect, useState } from 'react'
import { Datacontext } from '../../Productdata/Productdatacontext';
import Multicursol from './Multicursol';
import Heading from './Heading'
function Tablets() {
    const { Productdata } = useContext(Datacontext);
    // const [Pro, setProducts] = useState();
    // const getData = async () => {
    //     let result = await fetch("http://localhost:8000/tabs/?q=iphone+13");
    //     result = await result.json();
    //     setProducts(result);
    // }
    // useEffect(() => {
    //     getData();
    // }, []);
    return (
        <>
            <Heading heading="Tablets" />
            <Multicursol data={Productdata} />
        </>
    )
}

export default Tablets
