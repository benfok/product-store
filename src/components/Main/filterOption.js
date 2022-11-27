import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaInfoCircle } from 'react-icons/fa';
import '../../styles/filter.css'

const FilterOption = ({field, fieldName}) => {
    // this component takes in a field and maps out the list of options from the filterChoices object below.

    // object containing all the filter options. These are hard coded here for the purpose of this demo versus being dynamically pulled from the product data.
    const filterChoices = {
        productType: ["Private", "Group"],
        discipline: ["Ski", "Snowboard"],
        startTime: ['9:00AM', '9:30AM', '1:00PM', '1:30PM'],
        abilityLevels: ['First Time', 'Beginner', 'Intermediate', 'Advanced'],
        locations: ["Lionshead", "Vail Village", "Golden Peak"],
    };

    let dataList = null;

    // const data = [...new Set(productData.map(product => product[field]))]; // alternative that would create an array of unique values based on the field passed in rather than having static values stored here
    const data = filterChoices[field];
    dataList= data.map(value => {
        return (
            <div className="checkboxContainer-left" key={value}>
                <label className="checkboxLabel" >
                    <input data-field={field} data-value={value} type="checkbox" defaultChecked={false} className="filterCheckbox"/>
                    <span className='custom-checkbox'></span>
                </label>
                <p>{value}</p>
            </div>
        )
    })

        return (
            <div className="filterOption" key={field}>
                <div>
                    <h4>{fieldName}</h4>
                    <IconContext.Provider value={{ className: "filterInfoIcon"}}>
                        <FaInfoCircle />
                    </IconContext.Provider>
                </div>
                {dataList}
            </div>
        )
}

export default FilterOption;