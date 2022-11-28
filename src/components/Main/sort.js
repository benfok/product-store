import { React, useContext, useEffect, useState } from 'react';
import '../../styles/sort.css';
import { IconContext } from 'react-icons/lib';
import { TbArrowsSort } from 'react-icons/tb'
import ProductContext from '../../contexts/ProductContext';

const Sort = () => {

    const [isOpen, setIsOpen] = useState(false);
    const {sortOptionChanged} = useContext(ProductContext);
    const [sortOption, setSortOption] = useState('default');

    // toggle the sort menu dropdown
    const toggleSortMenu = () => {
        isOpen ? document.getElementById("sortDisplay").className = "sortOptionsContainer sortHidden" : document.getElementById("sortDisplay").className = "sortOptionsContainer";
        setIsOpen(!isOpen);
    }
    
    // values for dropdown and ids for state
    const sortOptions = {
        'default' : 'Sort By...',
        'sort-price-desc' : 'Price: High to Low',
        'sort-price-asc' : 'Price: Low to High',
        'sort-time-asc' : 'Start Time: Earliest to Latest',
        'sort-time-desc' : 'Start Time: Latest to Earliest',
    }

    // when sort option is changed, update local state and change text value in sort box
    const sortOptionHandler = (id) => {
        document.getElementById('sort-value-displayed').textContent = sortOptions[id];
        toggleSortMenu();
        setSortOption(id);
    }

    // if sort value changes locally, run the sortOptionChanged function from the ProductContext to trigger a rerender of the product data
    useEffect(() => {
        sortOptionChanged(sortOption);
    }, [sortOption])


    return (
        <div className="sortContainer">
            <div className="sort" onClick={() => toggleSortMenu()}>
                <p id="sort-value-displayed">{sortOptions[sortOption]}</p>
                <div className="sortIconContainer">
                    <IconContext.Provider value={{ className: "sortIcon"}}>
                        <TbArrowsSort />
                    </IconContext.Provider>
                </div>
            </div>
            <div id="sortDisplay" className="sortOptionsContainer sortHidden">
                <div id="default" className="sortOption" onClick={(event) => sortOptionHandler(event.currentTarget.id)}>
                    <p>Default</p>
                </div>
                <div id="sort-price-desc" className="sortOption" onClick={(event) => sortOptionHandler(event.currentTarget.id)}>
                    <p>Price: High to Low</p>
                </div>
                <div id="sort-price-asc" className="sortOption" onClick={(event) => sortOptionHandler(event.currentTarget.id)}>
                    <p>Price: Low to High</p>
                </div>
                <div id="sort-time-asc" className="sortOption" onClick={(event) => sortOptionHandler(event.currentTarget.id)}>
                    <p>Start Time: Earliest to Latest</p>
                </div>
                <div id="sort-time-desc" className="sortOption" onClick={(event) => sortOptionHandler(event.currentTarget.id)}>
                    <p>Start Time: Latest to Earliest</p>
                </div>
            </div>
        </div>
    )

}

export default Sort;