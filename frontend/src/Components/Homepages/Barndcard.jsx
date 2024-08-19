import React, { useContext } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import brand1 from '/Images/cursol/brand6.jpg'
import brand2 from '/Images/cursol/brand5.jpeg'
import brand3 from '/Images/cursol/brand3.jpeg'
import brand4 from '/Images/cursol/brand4.jpeg'
import brand6 from '/Images/cursol/nothingbrand.webp'
import brand7 from '/Images/cursol/oneplus.webp'
import brand8 from '/Images/cursol/vivobrand.jpg'
import { Datacontext } from '../../Productdata/Productdatacontext';
import { NavLink } from 'react-router-dom'
function Barndcard() {
    const { HandleUserSearch } = useContext(Datacontext);
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
            breakpoint: { max: 1024, min: 864 },
            items: 2
        },
        smalltablet: {
            breakpoint: { max: 864, min: 0 },
            items: 1
        }
    };
    const a = [{ imgLink: brand1, name: "Samsung" }, { imgLink: brand2, name: "Apple" }, { imgLink: brand3, name: "Redmi" }, { imgLink: brand4, name: "Realme" }, { imgLink: brand6, name: "Nothing" }, { imgLink: brand7, name: "Oneplues" }, { imgLink: brand8, name: "Vivo" }];
    return (
        <>
            <div className='brandCursol'>
                <Carousel responsive={responsive}>
                    {a.map((value, index) => {
                        return <NavLink key={index} to="/listofproducts" style={{ textDecoration: "none" }}><div key={index} className="brandcard" style={{
                            backgroundImage: `url(${value.imgLink})`
                        }} onClick={() => HandleUserSearch(value.name)}>
                            <div className="card-header" style={{ borderRadius: "1.8rem 1.8rem 0 0" }}>
                                <h2>{value.name}</h2>
                                <p>Smarter. Brighter. Mightier.</p>
                            </div>
                        </div></NavLink>
                    })}
                </Carousel>
            </div>


        </>
    )
}

export default Barndcard
