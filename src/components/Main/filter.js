import React from 'react';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go'

import '../../styles/filter.css'

const Filter = () => {
    
    return (
        <div className="filter">
            <p>Filter</p>
            <div className="filterIconContainer">
                <IconContext.Provider value={{ className: "filterIcon"}}>
                    <GoPlus />
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Filter;