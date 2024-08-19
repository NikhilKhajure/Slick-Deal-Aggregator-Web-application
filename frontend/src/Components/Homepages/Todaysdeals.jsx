import React, { useContext } from 'react'
import Heading from './Heading'
import Dealscard from './Dealscard';
import { Datacontext } from '../../Productdata/Productdatacontext';
import Cartmessage from './Cartmessage';
import Loadingspinner from '../Navbar/Loadingspinner';
function Todaysdeals() {
    const { Allproducts } = useContext(Datacontext);
    const toastTrigger = document.getElementById('liveToastBtn')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }
    return (
        <>
            <div className="deals">
                {Allproducts === undefined || Allproducts.length === 0 ? <Loadingspinner /> : Allproducts.map((value, index) => {
                    return <Dealscard key={index} imgLink={value.productImage} Pr_name={value.productName} sellerPrices={value.sellerPrices} />
                })}
            </div>
        </>
    )
}

export default Todaysdeals
