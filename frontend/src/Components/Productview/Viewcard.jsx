import React, { useContext } from 'react'
import top2 from '/Images/Topdeals/top2.jpg';
import Emailnotify from './Emailnotify';
import { Datacontext } from '../../Productdata/Productdatacontext';
function Viewcard() {
    const { ViewProduct } = useContext(Datacontext);
    console.log(ViewProduct);
    return (
        <>
            <div className="viewProduct">
                {/* <div className="multipleImages">
                <img src={top2} alt="" />
                <img src={top2} alt="" />
                <img src={top2} alt="" />
            </div> */}
                <div className="mainImage">
                    <img src={ViewProduct[0].productImage} alt="" />
                </div>
                <div className="productDetails">
                    <span className='productName'>{ViewProduct[0].productName}</span>
                    <hr />
                    <div className="details">
                        <span>Brand : <span>{ViewProduct[0].productName}</span></span>
                        <span>Availability : <span>Yes</span></span>
                        <span>Ratting Count : <span>{ViewProduct[0].productRatingCount}</span></span>
                    </div>
                    <hr />
                    <div className="prices">
                        {ViewProduct[0].sellerPrices.map((value, index) => {
                            return <>
                                <div className="seller">
                                    <span>{value.sellerName} : <span>{value.sellerPrice}</span></span>
                                    <a href={`https://www.${value.sellerName}/search?q=${ViewProduct[0].productName}`} target='_blank'><button className='quickViewBtn sellerBtn'>By Now {value.sellerName}</button></a>

                                </div>
                                <hr />
                            </>
                        })}
                    </div>
                    {/* <div className="specification">
                <span>Model Name : <span>Apple</span></span>
                <span>Color : <span>Red</span></span>
                <span>SIM Type : <span>Duel</span></span>
                <span>Display Size: <span>15.49 cm (6.1 inch)</span></span>
                <span>Processor Type: <span>A15 Bionic Chip</span></span>
            </div> */}

                    {/* <Emailnotify /> */}
                </div>

            </div>

        </>
    )
}

export default Viewcard
