import { React, useState } from 'react';
import '../../styles/sort.css';
import { IconContext } from 'react-icons/lib';
import { TbArrowsSort } from 'react-icons/tb'

const Sort = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSortMenu = () => {
        setIsOpen(!isOpen);
    }
    
    

    return (
        <div className="sort">
            <p>Sort By</p>
            <div className="sortIconContainer">
                <IconContext.Provider value={{ className: "sortIcon"}}>
                    <TbArrowsSort />
                </IconContext.Provider>
            </div>
        </div>
    )

}

export default Sort;