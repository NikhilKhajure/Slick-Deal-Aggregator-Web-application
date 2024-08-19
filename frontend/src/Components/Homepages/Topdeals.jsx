import React, { useContext } from 'react'
import Heading from './Heading'
import { Datacontext } from '../../Productdata/Productdatacontext';
import Multicursol from './Multicursol';
function Topdeals() {
    const { Allproducts } = useContext(Datacontext);
    return (
        <>
            <Multicursol data={Allproducts} />
        </>
    )
}

export default Topdeals
