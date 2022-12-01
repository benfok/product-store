import { React, useState, useEffect, useContext } from 'react';
import FilterOption from './filterOption';
import ProductContext from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go';
import { HiMinus } from 'react-icons/hi';
import '../../styles/filter.css';


const Filter = () => {
    
    // pulls in this function that triggers when clicking update results on the filter. It applies the selected filters to the product data to trigger a re-render of the product results
    const {applyFilterObject} = useContext(ProductContext);

    // state for whether the filter options panel is displayed or hidden
    const [isOpen, setIsOpen] = useState(false);

    // toggle for filter (display vs hidden)
    const toggleFilter = (event) => {
        isOpen ? document.getElementById("filterDisplay").className = "filterContainer filterHidden" : document.getElementById("filterDisplay").className = "filterContainer";
        setIsOpen(!isOpen)
    }
    
    // initial state of the filter object. Blank arrays mean product data is unfiltered and products display in full
    let filterObject = {
        age: [],
        productType: [],
        discipline: [],
        startTime: [],
        abilityLevels: [],
        locations: [],
    }

    // holds/updates the filter object in state
    const [filter, setFilter] = useState(filterObject);

    // when the filter object changes in state - trigger this function to update the product data rendered
    useEffect(() => {
        applyFilterObject(filter);
    }, [filter])

    // filter checkboxes can be visually checked and unchecked without consequence. Upon clicking the Update Results button, the values of the checked boxes are passed into the filter object arrays and the filter object state is set.
    const updateFilter = () => {
        const filterArray = document.getElementsByClassName("filterCheckbox");
        clearFilter(); // blanks the filter object prior to filling the arrays

        for(let i = 0; i < filterArray.length; i++){
            if(filterArray[i].checked) {
                filterObject[filterArray[i].dataset.field].push(filterArray[i].dataset.value)
            }
        }

        setFilter(filterObject);
    }

    // visually clears the checkboxes and resets the filter
    const clearCheckboxes = () => {
        const filterArray = document.getElementsByClassName("filterCheckbox");
        
        for(let i = 0; i < filterArray.length; i++){
            if(filterArray[i].checked) {
                filterArray[i].checked = false;
            }
        }

        clearFilter();
    }

    // resets the filter object and state to blank arrays - full product data displayed
    const clearFilter = () => {
        filterObject = {
            age: [],
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
                        field='age'
                        fieldName='Age Range'
                    />
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