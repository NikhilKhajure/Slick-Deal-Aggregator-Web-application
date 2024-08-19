import React from 'react'
import loader from '/Images/logos/loader.gif'
function Loadingspinner() {
    return (
        <>
            <div className="spinner">
                {/* <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
                <img src={loader} alt="" />
            </div>
        </>
    )
}

export default Loadingspinner
