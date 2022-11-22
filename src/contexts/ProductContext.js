import { createContext, useEffect, useState } from 'react';

const productData = require('../data/productData.json');

const ProductContext = createContext();

export function ProductProvider({children}){

    const [filteredProductData, setFilteredProductData] = useState(productData)
    const [lessonTypeFilter, setLessonTypeFilter] = useState([]);
    
    const filterProducts = async () => {
        let data = []

        if (lessonTypeFilter.length > 0) {
            data = productData.filter(product => {
                return lessonTypeFilter.includes(product.productType)
            })
        }

        return data;
    }

    useEffect(() => {
        filterProducts()
        .then(
            data => {
                if (data.length < 1) {
                    return
                } else {
                    setFilteredProductData(data);
                }
            }
        )
    }, [lessonTypeFilter]);

    return (
        <ProductContext.Provider value={{filteredProductData, lessonTypeFilter, setLessonTypeFilter}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;