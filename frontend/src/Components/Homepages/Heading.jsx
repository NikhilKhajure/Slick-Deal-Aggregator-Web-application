import React from 'react'

function Heading({ heading }) {
    return (
        <>
            <div className="heading">
                <h4>{heading}</h4>
                <button className='quickViewBtn' >View All</button>
            </div>
        </>
    )
}

export default Heading
