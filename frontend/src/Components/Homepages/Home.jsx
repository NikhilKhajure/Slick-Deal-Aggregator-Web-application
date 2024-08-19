import React, { useContext } from 'react'
import Banner from './Banner'
import './Home.css'
import Topdeals from './Topdeals'
import Todaysdeals from './Todaysdeals'
import { Datacontext } from '../../Productdata/Productdatacontext'
import Loadingspinner from '../Navbar/Loadingspinner'
import img1 from '/Images/Topdeals/img1.jpeg'
import img2 from '/Images/Topdeals/img2.jpg'
import img3 from '/Images/Topdeals/img3.jpg'
import top2 from '/Images/Topdeals/top2.jpg';
import Multicursol from './Multicursol'
import Productcursol from './Productcursol'
import Headingcursol from './Headingcursol'
import Barndcard from './Barndcard'
function Home() {
    const { Allproducts } = useContext(Datacontext);
    return (
        <>
            <div style={{ backgroundColor: "#f8f9fa" }}>
                {Allproducts === undefined ? <Loadingspinner /> :
                    <>
                        <Banner />
                        <Headingcursol heading="Save Time and Money." description="Say goodbye to endless browsing and price-checking. Our intuitive platform streamlines your shopping experience, allowing you to find the best prices in seconds. Spend less time searching and more time enjoying the savings." />
                        <Productcursol />
                        <Headingcursol heading="Compare Prices Across Leading Retailers" description="Don't settle for the first price you see. With our website, you can compare prices from trusted retailers such as Amazon, Flipkart, Jiomart, and more. Make informed purchasing decisions and ensure you're getting the best value for your money." />
                        <Barndcard />
                        <Headingcursol heading=" Don't Let Your Wallet Cry! Compare & Save" description="Your wallet called—it's tired of being neglected! Cheer it up by comparing prices on our website and giving it the savings it deserves. Remember, a happy wallet makes for a happy you!" />
                        <Topdeals />
                        <Headingcursol heading=" Unlock the Power of Price Comparison" description="Take control of your budget and make every penny count with our innovative price comparison website. From exclusive deals to unbeatable discounts, we connect you with the best offers from top retailers, so you can shop with confidence and save more." />
                        <Todaysdeals /></>}
                {/* <Tablets /> */}
            </div>
        </>
    )
}

export default Home
