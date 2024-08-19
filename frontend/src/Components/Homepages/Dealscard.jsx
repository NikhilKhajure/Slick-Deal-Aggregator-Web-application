import React, { useContext, useState } from 'react';
import { FiEye } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Datacontext } from '../../Productdata/Productdatacontext';
function Dealscard({ imgLink, Pr_name, sellerPrices }) {
    const [isHovered, setIsHovered] = useState(false);
    const { HandleViewCard, HandleCartData } = useContext(Datacontext);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <>
            <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: 'relative' }}>
                <div className="image">
                    <img src={imgLink} alt="" />
                    <div className="viewBtn" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'absolute',
                        left: '25%',
                        opacity: isHovered ? 1 : 0, // Set opacity based on hover state
                        transition: 'opacity 0.5s' // Define transition for opacity
                    }}>
                        <NavLink to="/viewproduct" onClick={() => HandleViewCard(Pr_name)} className='quickViewBtn'><FiEye style={{ margin: "0 .4rem", textDecoration: "none" }} />Quick View</NavLink>
                        <span className='quickViewBtn' id="liveToastBtn" onClick={() => HandleCartData(Pr_name)}><FaCartPlus style={{ margin: "0 .4rem" }} />Add To Cart</span>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="cardInfo">
                    <h2>{Pr_name}</h2>
                    <hr />
                    {!sellerPrices ? <h1>No Data Found</h1> : sellerPrices.map((value, index) => {
                        return <div key={index} className='sellerName'>
                            <h3> {value.sellerName} :  </h3>
                            <span> {value.sellerPrice} </span>
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}

export default Dealscard;
