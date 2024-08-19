import React, { useContext } from 'react'
import { Datacontext } from '../../Productdata/Productdatacontext';
function Cartmessage({ message }) {
    const { HandleCartMessages } = useContext(Datacontext);
    return (
        <>
            <div className="cartMessage"><span>{message}</span><button onClick={() => HandleCartMessages(false)} className='quickViewBtn'>ok</button></div>
        </>
    )
}

export default Cartmessage
