import React, { useContext } from 'react'
import top1 from '/Images/Topdeals/top1.jpg'
import { Datacontext } from '../../Productdata/Productdatacontext';
function Desctiption() {
    const { ViewProduct, Productreviews, Productdata } = useContext(Datacontext);

    return (
        <> {ViewProduct === null ? <h1>No Data Found</h1> : <div className="description">
            <div className="pr_details">
                <h3>{ViewProduct[0].productName}</h3>
                <p>{Productdata === undefined ? <p>Information Not Available</p> : Productdata[0].productFeatures.map((value, index) => { return <p key={index}> {value} </p> })}</p>
            </div>
            <div className="pr_image">
                <img src={ViewProduct[0].productImage} alt="" />
            </div>
        </div>}

        </>
    )
}

export default Desctiption
