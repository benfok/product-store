import React from 'react';


const ProductPricingTable = ({product}) => {

    const tableSize = 7;

    const productPricing = () => {
        for (let i = 0; i < tableSize ; i++) {

            return (
                <>
                    {product.twoWeekAvailability[i] && 
                        <div className="pricingCell">
                            {product.priceOnline}
                        </div>
                    }
                    {!product.twoWeekAvailability[i] && 
                        <div className="pricingCell">
                            No Price
                        </div>
                    }
                </>
            )
        }
    } 

    return (
        <>
            {productPricing}
        </>
    )

}

export default ProductPricingTable;