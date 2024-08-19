import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Datacontext } from '../../Productdata/Productdatacontext';
import Dealscard from './Dealscard';
import Heading from './Heading';
import Loadingspinner from '../Navbar/Loadingspinner';
function Multicursol({ data }) {
    const { Productdata } = useContext(Datacontext);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 784 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 784, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div style={{ width: "90%", margin: "auto" }}>
                <Carousel responsive={responsive}>
                    {data === undefined || data.length === 0 ? <h1></h1> : data.map((value, index) => {
                        return <div key={index}><Dealscard key={index} imgLink={value.productImage} Pr_name={value.productName} sellerPrices={value.sellerPrices} /></div>
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default Multicursol
