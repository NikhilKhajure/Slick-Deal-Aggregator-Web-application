import React, { useContext, useState } from 'react'
import { Datacontext } from '../../Productdata/Productdatacontext';
function Compare() {
    const { HandleProductComparison } = useContext(Datacontext);
    const [ProductComparison, setProductComparison] = useState(HandleProductComparison());
    return (
        <>
            <div className="compare">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Suggession</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>On The Basis Of Price</td>
                                <td> ({ProductComparison[0].lowestPriceSeller.sellerPrice}) ({ProductComparison[0].lowestPriceSeller.sellerName}) </td>
                            </tr>
                            <tr>
                                <td>On The Basis Of Cammera Quality </td>
                                <td>{ProductComparison[0].CammesQuality}</td>
                            </tr>
                            <tr>
                                <td>On The Basis RAM </td>
                                <td>{ProductComparison[0].RamQuality}</td>
                            </tr>
                            <tr>
                                <td>On The Basis ROM </td>
                                <td>{ProductComparison[0].RomQuality}</td>
                            </tr>
                            <tr>
                                <td>On The Basis Battary </td>
                                <td>{ProductComparison[0].BattaryQuality}</td>
                            </tr>
                        </tbody>
                    </table></div>
            </div>
            {/* <div id='info'></div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Ask Question About Product</label>
                    <input type="text" className="form-control" />
                    <button className='quickViewBtn' style={{ margin: ".7rem 0" }}>Ask</button>
                </div>
                <div className="answer">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure animi ipsam libero pariatur dolorem placeat quibusdam alias eum facilis amet!</p>
                </div> */}
        </>
    )
}

export default Compare
