import React from 'react'
import Topnavbar from './Topnavbar'
import Mainnavbar from './Mainnavbar'
import './Navbar.css'
function Navbar() {
    return (
        <>
            <div style={{ position: "sticky", top: "0", zIndex: "2000" }}>
                <Topnavbar />
                {/* <Mainnavbar /> */}
            </div>
        </>
    )
}

export default Navbar
