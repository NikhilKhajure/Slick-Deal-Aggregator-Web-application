import React, { useContext, useState } from 'react'
import './Kart.css'
import Kartcard from './Kartcard'
import Kartbtn from './Kartbtn'
import Productheading from './Productheading'
import { Datacontext } from '../../Productdata/Productdatacontext'
import Demo from './Demo'
import { Navigate, useNavigate } from 'react-router-dom'
function Kart() {
    const { CartData, HandleDeleteProduct, HandleCompareProducts } = useContext(Datacontext);
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const selectedItems = []; // Array to hold selected items

        // Loop through each checkbox to check if it's checked
        document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
            if (checkbox.checked) {
                selectedItems.push(checkbox.value); // Add the checked value to the array
            }
        });

        HandleDeleteProduct(selectedItems);
    };
    const navigate = useNavigate();
    const handleCompareProducts = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const selectedItems = []; // Array to hold selected items

        // Loop through each checkbox to check if it's checked
        document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
            if (checkbox.checked) {
                selectedItems.push(checkbox.value); // Add the checked value to the array
            }
        });
        HandleCompareProducts(selectedItems);
        navigate("compareproduct");
    };
    return (
        <>
            {CartData.length === 0 ? <h3 className='cartEmpty'>Cart Is Empty</h3> :
                <><Productheading />

                    {CartData === null ? <h1>No Data Found</h1> : CartData.map((value, index) => {
                        return <Kartcard key={index} cartId={index} productImage={value.productImage} productName={value.productName} productPreviousPrice={value.productPreviousPrice} />
                    })}
                    <div className="buttons">
                        <input type="submit" onClick={handleFormSubmit} className="btn quickViewBtn" value="Remove Selected Items" />
                        <span className="btn quickViewBtn" onClick={handleCompareProducts}>Compare Selected Items</span>
                    </div>
                </>}
            {/* <Demo /> */}
        </>
    )
}

export default Kart
