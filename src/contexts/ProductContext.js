import { createContext, useState } from 'react';

const productData = require('../../data/productData.json');

const ProductContext = createContext();

export function ProductProvider({children}){

    const [filteredProductData, setFilteredProductData] = useState(productData)
    const [lessonTypeFilter, setLessonTypeFilter] = useState(null);
    
    const filterProducts = async () => {
        let data = []

        if (lessonTypeFilter) {
            data = productData.filter(product => {
                return product.productType === lessonTypeFilter
            })
        }

        return data;
    }

    filterProducts()
    .then(
        data => {
            if (!data) {
                return
            } else {
                setFilteredProductData(data);
            }
        }
    )

    return (
        <ProductContext.Provider value={{filteredProductData, }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;