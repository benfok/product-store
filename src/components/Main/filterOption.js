import { React, useState, useContext, useEffect } from 'react';
import ProductContext from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { FaInfoCircle } from 'react-icons/fa';
import '../../styles/filter.css'

// const productData = require('../../data/productData.json');

// const removeItem = (array, value) => {
//     return array.filter(item => {
//         return item !== value;
//     })
// }

const FilterOption = ({field, fieldName}) => {
    
    const filterChoices = {
        productType: ["Private", "Group"],
        discipline: ["Ski", "Snowboard"],
        startTime: ['9:00AM', '9:30AM', '1:00PM', '1:30PM'],
        abilityLevels: ['First Time', 'Beginner', 'Intermediate', 'Advanced'],
        locations: ["Lionshead", "Vail Village", "Golden Peak"],
    };

    let dataList = null;

        // const data = [...new Set(productData.map(product => product[field]))]; // alternative that would create an array of unique values based on the field passed in rahter than having static values stored here
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