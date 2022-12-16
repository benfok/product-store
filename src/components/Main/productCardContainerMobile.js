import React from 'react';
import { IconContext } from 'react-icons/lib';
import {FaInfoCircle} from 'react-icons/fa';
import '../../styles/productCardMobile.css'
const productData = require('../../data/productData.json');

const ProductCardContainerMobile = ({dateIndex, hideUnavailable}) => {

    if (productData.length < 1) {
        return (
            <div>
                <p>No results returned</p>
            </div>
        )
    }

    else {
        // console.log(productData);

        const productCards = productData.map((product, index) => {

            if(!product.twoWeekAvailability[dateIndex] && hideUnavailable)
                return null
            else {
                return (
                    <div className="productCard" key={product.productCode} data-phc={product.productCode}>
                        <div className="productHeader">
                            <h3>{product.productName}</h3>
                            <IconContext.Provider value={{ className: "infoIcon"}}>
                                <FaInfoCircle />
                            </IconContext.Provider>
                        </div>
                        <div className="productAttributes">
                            <div>
                                <h4>FOR AGES</h4>
                                <p className="productAttributeValue">{product.ageValue}</p>
                            </div>
                            <div>
                                <h4>LESSON TYPE</h4>
                                <p className="productAttributeValue">{product.productType}</p>
                            </div>
                            <div>
                                <h4>START TIME</h4>
                                <p className="productAttributeValue">{product.startTime}</p>
                            </div>
                            <div>
                                <h4>DURATION</h4>
                                <p className="productAttributeValue">{product.duration}</p>
                            </div>
                        </div>
                        {product.productType === "Private" &&                             
                            <>
                                <div className="priceContainer">
                                    <p>Online:</p>
                                    <p className="onlineRate">${product.priceOnline}</p>
                                </div>
                                <div className="savingsContainer">
                                    <p className="priceSavings">Savings ${product.priceOffline - product.priceOnline}</p>
                                    <p className="windowRate">Window: ${product.priceOffline}</p>
                                </div>
                                {product.twoWeekAvailability[dateIndex] && 
                                    <div className="buttonContainer">
                                        <button className="btn primaryCTA">Learn More</button>
                                        <button className="btn secondaryCTA">Add to Cart</button>
                                    </div>
                                }
                                {!product.twoWeekAvailability[dateIndex] && 
                                    <p className="productUnavailable">Product Unavailable for Date Selected</p>
                                }
                            </> 
                        }                            
                    </div>
                )
            }
        })


        return (
            <div>
                {productCards}
            </div>
        )
    }

}

export default ProductCardContainerMobile;