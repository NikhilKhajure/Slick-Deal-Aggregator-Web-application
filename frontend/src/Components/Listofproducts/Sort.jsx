import React, { useContext, useRef } from 'react';
import { Datacontext } from '../../Productdata/Productdatacontext';
import { or } from 'firebase/firestore';

function Sort() {
    const { HandleSortElement } = useContext(Datacontext);
    const getNoOfItem = useRef();
    const getAsendDecend = useRef();
    const handleFilter = () => {
        const selectedValue = getNoOfItem.current.value;
        const order = getAsendDecend.current.value;
        HandleSortElement([selectedValue, order]);
    };

    return (
        <div className="alert alert-primary sort" role="alert">
            <div className="sortby">
                <span>Sort By :
                    <select className='selectCss' ref={getAsendDecend} name="" id="">
                        <option value="a-z">Name(A-Z)</option>
                        <option value="Low-High">Model(A-Z)</option>
                        <option value="High-Low">Brand(A-Z)</option>
                        <option value="Ratting">Rating(Highest)</option>
                        <option value="Ratting">Rating(Lowest)</option>
                    </select>
                </span>
            </div>
            <div className="show">
                <span>Show :
                    <select className='selectCss' ref={getNoOfItem} name="" id="">
                        <option value="2">2</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </span>
            </div>
            <div className="btn">
                {/* Call handleFilter function onClick */}
                <button className='quickViewBtn' style={{ margin: 0, padding: "0.2rem 1rem" }} onClick={handleFilter}>Filter</button>
            </div>
        </div>
    );
}

export default Sort;
