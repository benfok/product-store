import { createContext, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({children}){
    
    // pull in base data
    const productData = require('../data/productData.json');

    const [sortValue, setSortValue] = useState('default');
    const [filteredProductData, setFilteredProductData] = useState(productData)

    // run through the filter object and apply each filter in turn to filter the data. Then sort the data array if a sort option is selected
    const applyFilterObject = async (filterObject) => {
        const ageFiltered = await ageFilter(filterObject, productData);
        const disciplineFiltered = await disciplineFilter(filterObject, ageFiltered);
        const productFiltered = await productFilter(filterObject, disciplineFiltered);
        const abilityFiltered = await abilityFilter(filterObject, productFiltered);
        const locationFiltered = await locationFilter(filterObject, abilityFiltered);
        const startTimeFiltered = await startTimeFilter(filterObject, locationFiltered);
        const sortedData = await sortData(startTimeFiltered, sortValue)
        setFilteredProductData(sortedData);
    }

    // function to handle a change in the sort selection dropdown
    const sortOptionChanged = (value) => {
        setSortValue(value)
        async function sort(){
            const sortedData = await sortData(filteredProductData, value);
            setFilteredProductData(sortedData);
        }
        sort();
    }    

    // sort the product data based on the sort option selected. 
    const sortData = async (data, value) => {
       
        const dataToSort = data

        switch (value){
            case 'sort-price-desc':
                dataToSort.sort((a, b) => (a.priceOnline > b.priceOnline) ? -1 : (a.priceOnline === b.priceOnline) ? ((a.productCode > b.productCode) ? 1 : -1) : 1);
                break; 
            case 'sort-price-asc':
                dataToSort.sort((a, b) => (a.priceOnline > b.priceOnline) ? 1 : (a.priceOnline === b.priceOnline) ? ((a.productCode > b.productCode) ? 1 : -1) : -1);
                break; 
            case 'sort-time-asc':
                dataToSort.sort((a, b) => (a.startTimeValue > b.startTimeValue) ? 1 : (a.startTimeValue === b.startTimeValue) ? ((a.productCode > b.productCode) ? 1 : -1) : -1);
                break; 
            case 'sort-time-desc':
                dataToSort.sort((a, b) => (a.startTimeValue > b.startTimeValue) ? -1 : (a.startTimeValue === b.startTimeValue) ? ((a.productCode > b.productCode) ? 1 : -1) : 1);
                break; 
            default:
                dataToSort.sort((a, b) => (a.productCode > b.productCode) ? 1 : -1);
                break;
        }

        return dataToSort;
    }
    
    // the filter functions run through the product data and filter according to the option(s) selected
    const ageFilter = async (filterObject, data) => {
        if (filterObject.ageRange.length > 0) {
            const newData = data.filter(product => {
                for(let i = 0; i < product.ageRange.length; i++){
                    if(filterObject.ageRange.includes(product.ageRange[i])){
                        return true
                    } else {
                        continue
                    }
                }
            })
            return newData
        }
        return data
    }

    const disciplineFilter = async (filterObject, data) => {
  
        if (filterObject.discipline.length > 0) {
            const newData = data.filter(product => {
                return filterObject.discipline.includes(product.discipline)
            })
            return newData
        }
        return data;
    }

    const productFilter = async (filterObject, data) => {

        if (filterObject.productType.length > 0) {
            const newData = data.filter(product => {
                return filterObject.productType.includes(product.productType)
            })
            return newData
        }
        return data;
    }

    const abilityFilter = async (filterObject, data) => {

        if (filterObject.abilityLevels.length > 0) {
            const newData = data.filter(product => {
                for(let i = 0; i < product.abilityLevels.length; i++){
                    if(filterObject.abilityLevels.includes(product.abilityLevels[i])){
                        return true
                    } else {
                        continue
                    }
                }
            })
            return newData
        }
        return data;
    }

    const locationFilter = async (filterObject, data) => {

        if (filterObject.locations.length > 0) {
            const newData = data.filter(product => {
                for(let i = 0; i < product.locations.length; i++){
                    if(filterObject.locations.includes(product.locations[i])){
                        return true
                    } else {
                        continue
                    }
                }
            })
            return newData
        }
        return data;
    }

    const startTimeFilter = async (filterObject, data) => {

        if (filterObject.startTime.length > 0) {
            const newData = data.filter(product => {
                return filterObject.startTime.includes(product.startTime)
            })
            return newData
        }
        return data;
    }

    return (
        <ProductContext.Provider value={{filteredProductData, applyFilterObject, sortOptionChanged}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;