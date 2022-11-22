import { React, useContext } from 'react';
import ProductContext from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { FaInfoCircle } from 'react-icons/fa';
import '../../styles/filter.css'

// const productData = require('../../data/productData.json');

const removeItem = (array, value) => {
    return array.filter(item => {
        return item !== value;
    })
}

const FilterOption = ({field, fieldName, sortType}) => {
    
    const {lessonTypeFilter, setLessonTypeFilter} = useContext(ProductContext);

    const adjustLessonType = (value) => {

        if (lessonTypeFilter.includes(value)) {
            const newArray = removeItem(lessonTypeFilter, value);
            setLessonTypeFilter(newArray);
        } else {
            const newArray = [...lessonTypeFilter, value];
            setLessonTypeFilter(newArray);
        }
    };

    let dataList = null;

    if (sortType === 'lessonType') {
            // const data = [...new Set(productData.map(product => product[field]))]; // array of unique values based on the field passed in
            const data = ["Private", "Group"]
            dataList= data.map(value => {
                return (
                    <div className="checkboxContainer-left" key={value}>
                        <label className="checkboxLabel" >
                            <input type="checkbox" defaultChecked={false}/>
                            <span className='custom-checkbox'  onClick={() => adjustLessonType(value)} ></span>
                        </label>
                        <p>{value}</p>
                    </div>
                )
            })
    }

    if (sortType === 'time') {
        const times = ['9:00AM', '9:30AM', '1:00PM', '1:30PM'];
        dataList= times.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox'></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })
    }

    if (sortType === 'ability') {
        const levels = ['First Time', 'Beginner', 'Intermediate', 'Advanced'];
        dataList= levels.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox' ></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })
    }

    if (sortType === 'location') {
        const locations = ["Lionshead", "Vail Village", "Golden Peak"];
        dataList= locations.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox' ></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })
    }

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