import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IoHeartDislikeOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import { Datacontext } from '../../Productdata/Productdatacontext'
function Productlistcard({ productImage, productName, productPreviousPrice, productFeatures }) {
    const { HandleViewCard, HandleCartData, Productreviews } = useContext(Datacontext);
    return (
        <>
            <div className="productCard">
                <div className="ProductImage">
                    <img src={productImage} alt="" />
                </div>
                <div className="ProductInfo">
                    <h3>{productName}</h3>
                    <p>{productFeatures}</p>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <div className="ProductPrice">
                    <span>{productPreviousPrice}</span>
                </div>
                <div className="ActionBtn">
                    <span className='quickViewBtn ProductIcons' onClick={() => HandleCartData(productName)}>Add To Cart</span>
                    <div style={{ display: "flex" }}>
                        <span className='quickViewBtn ProductIcons' ><IoHeartDislikeOutline /></span>
                        <NavLink to="/viewproduct" onClick={() => HandleViewCard(productName)} className='quickViewBtn ProductIcons'><IoEyeOutline /></NavLink>
                        <NavLink to="/kart/compareproduct" className='quickViewBtn ProductIcons'><VscGitCompare /></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Productlistcard
