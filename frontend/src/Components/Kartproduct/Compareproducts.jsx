import React, { useContext } from 'react';
import { Datacontext } from '../../Productdata/Productdatacontext';

function Compareproducts() {
    const { comparisonProducts } = useContext(Datacontext);
    return (
        <>

            {comparisonProducts === undefined ? <h1 className='heading' style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50vh"
            }} >Select Items From Cart</h1> : <> <center className='heading'>Compare Products</center>  <div className="tabledata">
                <table className="compare-table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Price</th>
                            <th>Rating & Reviews</th>
                            <th>Features</th>
                            <th>Previous Price</th>
                            <th>Discount</th>
                            <th>Delivery Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonProducts.map(product => (
                            product.sellerPrices.map(seller => (
                                <tr key={`${product.productName}-${seller.sellerName}`}>
                                    <td>{product.productName}</td>
                                    <td><img src={product.productImage} alt={product.productName} /></td>
                                    <td>{seller.sellerName}</td>
                                    <td>{seller.sellerPrice}</td>
                                    <td>{product.productRatingCount}</td>
                                    <td>{product.productFeatures.join(", ")}</td>
                                    <td>{product.productPreviousPrice}</td>
                                    <td>{product.productDiscount}</td>
                                    <td>{product.deliveryDetails}</td>
                                </tr>
                            ))
                        ))}
                    </tbody>
                </table>
            </div></>}
        </>
    )
}

export default Compareproducts;
