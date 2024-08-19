import React from 'react'

function Headingcursol({ heading, description }) {
    return (
        <>
            <div className="p-5 bg-body-tertiary rounded-3" style={{ width: "90%", margin: "auto" }}>
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold cursol_heading">{heading}</h1>
                    <p className="col-md-8 fs-4">{description}</p>
                </div>
            </div>
        </>
    )
}

export default Headingcursol
