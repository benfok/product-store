import React from 'react';
import FilterOption from './filterOption';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go'
import '../../styles/filter.css'

// const productData = require('../../data/productData.json');
// const lessonTypes = [...new Set(productData.map((product) => product.productType))];

const Filter = () => {
    
    return (
        <>
            <div className="filter">
                <p>Filter</p>
                <div className="filterIconContainer">
                    <IconContext.Provider value={{ className: "filterIcon"}}>
                        <GoPlus />
                    </IconContext.Provider>
                </div>
            </div>
            <div className="filterOptionsContainer">
                    <FilterOption
                        field='productType'
                        fieldName='Lesson Type'
                        sortType='alphabetical'
                    />
                    <FilterOption
                        field='discipline'
                        fieldName='Sport'
                        sortType='alphabetical'
                    />
                    <FilterOption
                        field='startTime'
                        fieldName='Start Time'
                        sortType='time'
                    />
                    <FilterOption
                        field='duration'
                        fieldName='Duration'
                        sortType='alphabetical'
                    />
                    <FilterOption
                        field='abilityLevels'
                        fieldName='Ability Level'
                        sortType='ability'
                    />
                    <FilterOption
                        field='locations'
                        fieldName='Location'
                        sortType='location'
                    />
            </div>
        </>
    )
}

export default Filter;