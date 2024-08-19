import React, { useContext } from 'react'
function Reviews({ name, review, ratting }) {
    return (
        <>
            <div className="reviews">
                <div className="customer" style={{ borderRadius: ".2rem .2rem 0 0", fontSize: "1.3rem", fontWeight: "500" }}>
                    <span>{name}</span>
                    <span>12/04/2024</span>
                </div>
                <div className="customer" style={{ borderRadius: "0 0 .2rem .2rem", }}>
                    <p>{review}</p>
                    <span>{ratting}</span>
                </div>
            </div>
        </>
    )
}

export default Reviews
