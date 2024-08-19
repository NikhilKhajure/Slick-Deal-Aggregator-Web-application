import React, { useState } from 'react';

function Demo() {
    const [items, setItems] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        const selectedItems = []; // Array to hold selected items

        // Loop through each checkbox to check if it's checked
        document.querySelectorAll('input[type=checkbox]').forEach((checkbox) => {
            if (checkbox.checked) {
                selectedItems.push(checkbox.value); // Add the checked value to the array
            }
        });

        setItems(selectedItems); // Update the items state with the selected values
    };
    console.log(items);
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label htmlFor="vehicle3"> I have a boat</label><br /><br />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default Demo;
