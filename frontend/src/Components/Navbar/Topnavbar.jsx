import React, { useContext, useRef, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaCartPlus } from "react-icons/fa";
import logo from '/Images/logos/logo.png'
import { NavLink, Link } from 'react-router-dom';
import { FcBusinessman } from "react-icons/fc";
import { Datacontext } from '../../Productdata/Productdatacontext';
function Topnavbar() {
    const { CartData, HandleUserSearch } = useContext(Datacontext);
    const Usersearch = useRef("");
    const HandelSearch = () => {
        HandleUserSearch(Usersearch.current.value);
    }
    const handleSignout = () => {
        localStorage.clear("slick-deal-user");
        window.onload();
    }
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <NavLink to="/"><img src={logo} alt="" /></NavLink>
                </div>
                <div className="searchBar">
                    <input type="text" ref={Usersearch} placeholder='Search For Product' name="" id="" />
                    <NavLink to="listofproducts">
                        <button onClick={HandelSearch}><FiSearch className='searchIcon' /></button>
                    </NavLink>
                </div>
                <div className="cart">

                    <div className="dropdown login">
                        <button className="btn dropdown-toggle cart_logo" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FcBusinessman style={{ fontSize: "2rem" }} />
                        </button>
                        <ul className="dropdown-menu text-white">span
                            {localStorage.getItem("slick-deal-user") ? <><span className="dropdown-item"></span><Link to="signup" style={{ textDecoration: "none" }} onClick={handleSignout}><span className="dropdown-item">SignOut</span></Link></> : <><Link to="/signin" style={{ textDecoration: "none" }}><span className="dropdown-item">SignIn</span></Link>
                                <Link to="signup" style={{ textDecoration: "none" }}><span className="dropdown-item">SignUp</span></Link></>}
                        </ul>
                    </div>
                    <NavLink to="kart">
                        <button type="button" className="btn position-relative">
                            <FaCartPlus className='cartLogo' />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {CartData.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Topnavbar
