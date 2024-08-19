import React, { useContext } from 'react'
import Viewcard from './Viewcard'
import './productview.css'
import Producttab from './Producttab'
import { Datacontext } from '../../Productdata/Productdatacontext';
function View() {
    const { ViewProduct } = useContext(Datacontext);
    return (
        <>
            {ViewProduct === null ? <h1 className='viewHeading'>No Data Found</h1> :
                <><Viewcard />
                    <Producttab /></>}
        </>
    )
}

export default View
