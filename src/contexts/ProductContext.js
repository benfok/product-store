import { createContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export function ProductProvider({children}){
    
    const productData = require('../data/productData.json');

    const [filteredProductData, setFilteredProductData] = useState(productData)

    const applyFilterObject = async (filterObject) => {
        const disciplineFiltered = await disciplineFilter(filterObject, productData);
        const productFiltered = await productFilter(filterObject, disciplineFiltered);
        const abilityFiltered = await abilityFilter(filterObject, productFiltered);
        const locationFiltered = await locationFilter(filterObject, abilityFiltered);
        const startTimeFiltered = await startTimeFilter(filterObject, locationFiltered);
        setFilteredProductData(startTimeFiltered);
    }

    useEffect(() => {
        console.log(filteredProductData);
    }, [filteredProductData]);

    
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
        <ProductContext.Provider value={{filteredProductData, applyFilterObject}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;