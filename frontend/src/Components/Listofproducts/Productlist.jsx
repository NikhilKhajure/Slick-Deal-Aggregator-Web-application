import React, { useContext } from 'react'
import Sort from './Sort'
import Productlistcard from './Productlistcard'
import { Datacontext } from '../../Productdata/Productdatacontext'
import Loadingspinner from '../Navbar/Loadingspinner'
function Productlist() {
    const { Productdata, HandleSort, getProductUrl } = useContext(Datacontext);
    // console.log(Productdata[0].productUrl);
    try {
        Productdata.sort((a, b) => {
            const nameA = a.productName.toUpperCase();
            const nameB = b.productName.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    } catch (error) {
        if (error) {
            return "Internal Server Error";
        }
    }
    return (
        <>
            <div className="list">

                {Productdata === undefined || Productdata.length === 0 ? <Loadingspinner /> : <><Sort /> {Productdata.slice(0, HandleSort[0]).map((value, index) => {
                    return <Productlistcard key={index} productImage={value.productImage} productName={value.productName} productPreviousPrice={value.productPreviousPrice} productFeatures={value.productFeatures} />
                })}</>}
            </div>
        </>
    )
}

export default Productlist
