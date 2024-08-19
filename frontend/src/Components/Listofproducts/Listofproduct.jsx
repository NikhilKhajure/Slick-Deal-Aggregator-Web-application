import React from 'react'
import Categories from './Categories'
import './List.css'
import Productlist from './Productlist'
function Listofproduct() {
    return (
        <>
            <div className='listofproduct'>
                {/* <Categories /> */}
                <Productlist />
            </div>
        </>
    )
}

export default Listofproduct
