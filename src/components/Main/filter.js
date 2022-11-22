import { React, useState } from 'react';
import FilterOption from './filterOption';
import { ProductProvider } from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import '../../styles/filter.css';

// const productData = require('../../data/productData.json');
// const lessonTypes = [...new Set(productData.map((product) => product.productType))];

const Filter = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = (event) => {
        isOpen ? document.getElementById("filterDisplay").className = "filterOptionsContainer filterHidden" : document.getElementById("filterDisplay").className = "filterOptionsContainer";
        setIsOpen(!isOpen)
    }

    return (
        <ProductProvider>
            <div className="filter" onClick={event => toggleFilter(event)}>
                <p>Filter</p>
                <div className="filterIconContainer">
                    {!isOpen &&
                        <IconContext.Provider value={{ className: "filterIcon"}}>
                            <GoPlus />
                        </IconContext.Provider>
                    }
                    {isOpen &&
                        <IconContext.Provider value={{ className: "filterIcon"}}>
                            <HiMinus />
                        </IconContext.Provider>
                    }
                </div>
            </div>
            <div id="filterDisplay" className="filterOptionsContainer filterHidden">
                    <FilterOption
                        field='productType'
                        fieldName='Lesson Type'
                        sortType='lessonType'
                    />
                    {/* <FilterOption
                        field='discipline'
                        fieldName='Sport'
                        sortType='alphabetical'
                    /> */}
                    <FilterOption
                        field='startTime'
                        fieldName='Start Time'
                        sortType='time'
                    />
                    {/* <FilterOption
                        field='duration'
                        fieldName='Duration'
                        sortType='alphabetical'
                    /> */}
                    <FilterOption
                        field='abilityLevels'
                        fieldName='Ability'
                        sortType='ability'
                    />
                    <FilterOption
                        field='locations'
                        fieldName='Location'
                        sortType='location'
                    />
            </div>
        </ProductProvider>
    )
}

export default Filter;