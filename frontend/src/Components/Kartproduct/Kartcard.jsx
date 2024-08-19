import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoHeartDislikeOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import { Datacontext } from '../../Productdata/Productdatacontext';

function Kartcard({ cartId, productImage, productName, productPreviousPrice }) {
    const { HandleViewCard, deleteProduct, HandleDeleteProduct, SelectedItem } = useContext(Datacontext);
    const [selectedItemsCart, setSelectedItemsCart] = useState([]);

    const handleCheckboxChange = (event) => {
        const itemName = event.target.value;
        setSelectedItemsCart((prve) => {
            return [...prve, itemName];
        });
    };
    { deleteProduct === true ? SelectedItem([selectedItemsCart]) : null };
    { deleteProduct === true ? console.log(selectedItemsCart) : null };

    return (
        <div className="kartcard">
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    value={productName}
                    onChange={handleCheckboxChange}
                    id={cartId}
                />
                <label className="form-check-label" htmlFor={cartId}>
                    <div className="productCard">
                        <div className="ProductImage">
                            <img src={productImage} alt="" />
                        </div>
                        <div className="ProductInfo">
                            <h3>{productName}</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, voluptate.lorem10 Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, alias.</p>
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
                            <div style={{ display: "flex" }}>
                                <span className='quickViewBtn ProductIcons'><IoHeartDislikeOutline /></span>
                                <NavLink to="/viewproduct" onClick={() => HandleViewCard(productName)} className='quickViewBtn ProductIcons'><IoEyeOutline /></NavLink>
                                <span className='quickViewBtn ProductIcons'><VscGitCompare /></span>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
        </div>
    );
}

export default Kartcard;
