import { React, useState, useEffect, useContext } from 'react';
import FilterOption from './filterOption';
// import { ProductProvider } from '../../contexts/ProductContext';
import ProductContext from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import '../../styles/filter.css';

// const productData = require('../../data/productData.json');
// const lessonTypes = [...new Set(productData.map((product) => product.productType))];

const Filter = () => {
    
    const {applyFilterObject} = useContext(ProductContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggleFilter = (event) => {
        isOpen ? document.getElementById("filterDisplay").className = "filterContainer filterHidden" : document.getElementById("filterDisplay").className = "filterContainer";
        setIsOpen(!isOpen)
    }
    
    let filterObject = {
        productType: [],
        discipline: [],
        startTime: [],
        abilityLevels: [],
        locations: [],
    }
    
    const [filter, setFilter] = useState(filterObject);

    useEffect(() => {
        applyFilterObject(filter);
    }, [filter])


    const updateFilter = () => {
        const filterArray = document.getElementsByClassName("filterCheckbox");
        clearFilter();

        for(let i = 0; i < filterArray.length; i++){
            if(filterArray[i].checked) {
                filterObject[filterArray[i].dataset.field].push(filterArray[i].dataset.value)
            }
        }

        setFilter(filterObject);
    }

    const clearCheckboxes = () => {
        const filterArray = document.getElementsByClassName("filterCheckbox");
        
        for(let i = 0; i < filterArray.length; i++){
            if(filterArray[i].checked) {
                filterArray[i].checked = false;
            }
        }

        clearFilter();
    }

    const clearFilter = () => {
        filterObject = {
            productType: [],
            discipline: [],
            startTime: [],
            abilityLevels: [],
            locations: [],
        }

        setFilter(filterObject);
    }

    return (
        <>
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
            <div id="filterDisplay" className="filterContainer filterHidden">
                <div className="filterOptionsContainer">
                    <FilterOption
                        field='productType'
                        fieldName='Lesson Type'
                    />
                    <FilterOption
                        field='discipline'
                        fieldName='Sport'
                    />
                    <FilterOption
                        field='startTime'
                        fieldName='Start Time'
                    />
                    {/* <FilterOption
                        field='duration'
                        fieldName='Duration'
                        sortType='alphabetical'
                    /> */}
                    <FilterOption
                        field='abilityLevels'
                        fieldName='Ability'
                    />
                    <FilterOption
                        field='locations'
                        fieldName='Location'
                    />
                </div>
                <div className="filterButtonContainer">
                    <div className="btn tertiaryCTA" onClick={() => clearCheckboxes()}>Clear All</div>
                    <div className="btn secondaryCTA" onClick={() => updateFilter()}>Update Results</div>
                </div>
            </div>
        </>
    )
}

export default Filter;