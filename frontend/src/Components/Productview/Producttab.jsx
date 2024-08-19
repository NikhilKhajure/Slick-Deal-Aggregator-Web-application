import React, { useContext, useState } from 'react'
import Desctiption from './Desctiption'
import Reviews from './Reviews';
import Compare from './Compare';
import Askquestion from './Askquestion';
import { Datacontext } from '../../Productdata/Productdatacontext'
function Producttab() {
    const { Productreviews } = useContext(Datacontext);
    const [selectTap, setSelectTab] = useState("description");
    return (
        <>
            <div className="tab">
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item pointer-event quickViewBtn tabItem" style={{ cursor: "pointer" }}>
                        <span className={`nav-link ${selectTap === "description" && "bg"}`} onClick={() => setSelectTab("description")} aria-current="page"  >Description</span>
                    </li>
                    <li className="nav-item pointer-event quickViewBtn tabItem" style={{ cursor: "pointer" }}>
                        <span className={`nav-link ${selectTap === "reviews" && "bg"}`} onClick={() => setSelectTab("reviews")} aria-current="page"  >Review</span>
                    </li>
                    <li className="nav-item pointer-event quickViewBtn tabItem" style={{ cursor: "pointer" }}>
                        <span className={`nav-link ${selectTap === "compare" && "bg"}`} onClick={() => setSelectTab("compare")} aria-current="page"  >Comparison</span>

                    </li>
                    {/* <li className="nav-item pointer-event quickViewBtn tabItem" style={{ cursor: "pointer" }}>
                        <span className={`nav-link ${selectTap === "question" && "bg"}`} onClick={() => setSelectTab("question")} aria-current="page"  >Ask Questions</span>
                    </li> */}
                </ul>
            </div>
            <div className="tabinfo">
                {selectTap === "description" && <Desctiption />}
                {selectTap === "reviews" && Productreviews[0].reviews.map((value, index) => {
                    return <Reviews name="Flipkart User Review" review={value.reviewContent} ratting={value.rating} />
                })}
                {selectTap === "compare" && <Compare />}
                {/* {selectTap === "question" && <Askquestion />} */}
            </div>
        </>
    )
}

export default Producttab
