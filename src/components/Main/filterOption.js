import React from 'react';
import '../../styles/filter.css'

const productData = require('../../data/productData.json');

const FilterOption = ({field, fieldName, sortType}) => {
    
    if (sortType === 'alphabetical') {
            const data = [...new Set(productData.map(product => product[field]))]; // array of unique values based on the field passed in
            const sortedData = data.sort();
            const dataList= sortedData.map(value => {
                return (
                    <div className="checkboxContainer-left" key={value}>
                        <label className="checkboxLabel" >
                            <input type="checkbox" defaultChecked={false}/>
                            <span className='custom-checkbox'  onClick={console.log('CLICKED')} ></span>
                        </label>
                        <p>{value}</p>
                    </div>
                )
            })

        return (
            <div className="filterOption" key={field}>
                <h4>{fieldName}</h4>
                {dataList}
            </div>
        )
    }

    if (sortType === 'time') {
        const times = ['9:00AM', '9:30AM', '1:00PM', '1:30PM'];
        const dataList= times.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox'  onClick={console.log('CLICKED')} ></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })

        return (
            <div className="filterOption" key={field}>
                <h4>{fieldName}</h4>
                {dataList}
            </div>
        )
    }

    if (sortType === 'ability') {
        const levels = ['First Time', 'Beginner', 'Intermediate', 'Advanced'];
        const dataList= levels.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox'  onClick={console.log('CLICKED')} ></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })

        return (
            <div className="filterOption" key={field}>
                <h4>{fieldName}</h4>
                {dataList}
            </div>
        )
    }

    if (sortType === 'location') {
        const locations = ["Lionshead", "Vail Village", "Golden Peak"];
        const dataList= locations.map(value => {
            return (
                <div className="checkboxContainer-left" key={value}>
                    <label className="checkboxLabel" >
                        <input type="checkbox" defaultChecked={false}/>
                        <span className='custom-checkbox'  onClick={console.log('CLICKED')} ></span>
                    </label>
                    <p>{value}</p>
                </div>
            )
        })

        return (
            <div className="filterOption" key={field}>
                <h4>{fieldName}</h4>
                {dataList}
            </div>
        )
    }

}

export default FilterOption;