import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ipads from '/Images/cursol/ipads.png'
import mobiles from '/Images/cursol/mobiles.png'
import tvs from '/Images/cursol/tvs.png'
import watches from '/Images/cursol/watches4.png'
import speekers from '/Images/cursol/speekers.png'
import { Datacontext } from '../../Productdata/Productdatacontext';
import { NavLink } from 'react-router-dom'
function Productcursol() {
    const { HandleHeaderItems } = useContext(Datacontext);
    const a = [{ imgLink: speekers, name: "speekers" }, { imgLink: watches, name: " Smart Watches " }, { imgLink: tvs, name: "Desktops " }, { imgLink: mobiles, name: "Mobiles" }, { imgLink: ipads, name: "Tablets " }];
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div style={{ width: "90%", margin: "auto", backgroundColor: "#f8f9fa" }}>
                <Carousel responsive={responsive}>
                    {a.map((value, index) => {
                        return <NavLink key={index} to="/listofproducts" style={{ textDecoration: "none", color: "black" }}><div className='productcursol'><img src={value.imgLink} width="300px" alt="" onClick={() => HandleHeaderItems(value.name)} />
                            <span> {value.name} </span>
                        </div></NavLink>
                    })}
                </Carousel>
            </div>
        </>
    )
}

export default Productcursol
