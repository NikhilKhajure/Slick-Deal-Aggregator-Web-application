import React, { useContext, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from '/Images/logos/logo.png'
import { NavLink } from 'react-router-dom';
import Cartmessage from '../Homepages/Cartmessage';
import { Datacontext } from '../../Productdata/Productdatacontext';
function Mainnavbar() {
    const [Slider, setSlider] = useState(false);
    const { CartMessage, CartAddedMessage, HandleHeaderItems } = useContext(Datacontext);
    const a = ["Smart Watches", "Printers & Scanners", "Keyboards & Mouses", "Desktops", "Tablets", "speakers", "Headphones"];
    return (
        <>
            <div className="slider" style={{ left: Slider === false ? "-80%" : "0" }}>
                <div className="d-flex flex-column flex-shrink-0 p-3 " style={{ width: '280px', height: "100vh", backgroundColor: "aquamarine" }}>
                    <div className="logo" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>   <NavLink to="/"><img src={logo} alt="" /></NavLink>
                        <span onClick={() => setSlider(false)}><IoMdClose className='closeBtn' /></span>
                    </div>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        {a.map((value, idx) => {
                            return <NavLink to="/listofproducts" style={{ textDecoration: "none" }}><li key={idx} className="nav-item" onClick={() => HandleHeaderItems(value)}>
                                <span className="nav-link" style={{ cursor: "pointer", color: "black" }}> <NavLink activeClassName="nav-link" style={{ textDecoration: "none", color: "black" }} to="listofproducts"> {value} </NavLink> </span>
                            </li></NavLink>
                        })}
                    </ul>
                    <hr />

                </div>
            </div>
            <div className="mainnavbar">
                <div className="sliderbtn" onClick={() => setSlider(true)}>All <GiHamburgerMenu className='ms-2' /> </div>
                <div className="navlist">
                    <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>Home</NavLink>
                    {a.map((value, ids) => {
                        return <span onClick={() => HandleHeaderItems(value)}> <NavLink to="/listofproducts" style={{ textDecoration: "none", color: "black" }}>{value}</NavLink> </span>
                    })}
                </div>
            </div>
            {(CartMessage === true && CartAddedMessage == false) ? <Cartmessage message="Item is Added" /> : null}
            {(CartMessage === true && CartAddedMessage == true) ? <Cartmessage message="Item is Already Added" /> : null}
        </>
    );
}

export default Mainnavbar;
