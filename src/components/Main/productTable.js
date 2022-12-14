import React, {useContext} from 'react';
import CompareContext from '../../contexts/CompareContext';
import ModalContext from '../../contexts/ModalContext';
import ProductContext from '../../contexts/ProductContext';
import { IconContext } from 'react-icons/lib';
import { FaMountain } from 'react-icons/fa';
import '../../styles/productTable.css';

const ProductTable = ({dateIndex, hideUnavailable, selected, activeTab}) => {
  
    // pull in comparison products, toggle for the modal and the product data
    const {comparisons, toggleComparisons} = useContext(CompareContext);
    const {togglePurchaseModal} = useContext(ModalContext); 
    const {filteredProductData} = useContext(ProductContext);

    // the products being mapped and rendered are the product data (post filter) by default. If the active tab is switched to compare products, the source data is switched to the products stored in the comparisons state object
    let productsToMap = filteredProductData;

    activeTab === "by date" ? productsToMap = filteredProductData : productsToMap = comparisons;
    
    // define date format for displaying in pricing cells
    const dateOptions = {
        weekday: 'short',
        month: 'numeric',
        day:'numeric'
    }

    // handle if the source product data object is empty
    if (productsToMap.length < 1) {

        if (activeTab === 'by date') {
            return (
                    <p className="noResultsMessage">No results returned</p>
            )
        } else {
            return (
                    <p className="noResultsMessage">Please select products for comparison</p>
            )
        }
    }

    else {
        // map through product data and render products
        const productCards = productsToMap.map((product, index) => {

            let isCompared = false;

            // determine if the product being mapped is currently selected for comparison. This determines what button is displayed: to add to or remove from comparison
            for (let i=0; i < comparisons.length; i++) {
                if(comparisons[i].productCode === product.productCode){
                    isCompared = true;
                }  else {
                    continue
                }
            }

            // if the product is unavailable for the selected date, and the Hide Unavailable checkbox is checked, do not display it
            if(!product.twoWeekAvailability[dateIndex] && hideUnavailable)
                return null
            else {
                // creates a temp array of the next 7 day availability for the product (simulates an inventory call)
                const availabilityArray = product.twoWeekAvailability.slice(dateIndex, dateIndex + 7);

                if (availabilityArray.length < 7) {
                    for (let i = 0; i = 7 - availabilityArray.length; i ++) {
                        availabilityArray.push("empty");
                    }
                }

                return (
                    <div className="byDateResultsRow" key={product.productCode} data-phc={product.productCode}>    
                        <div className="productTableCard" data-phc={product.productCode} key={`${product.productCode}-card`}>
                            <div className="productHeader">
                                <h3 className="productTitle">{product.productName}</h3>
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
                            {!isCompared &&
                                <div className="btn tertiaryCTA" data-compare={false} onClick={(event) => toggleComparisons(event, product)}>
                                    Add To Comparison
                                </div>
                            }
                            {isCompared &&
                                <div className="btn primaryCTA" data-compare={true} onClick={(event) => toggleComparisons(event, product)}>
                                    Remove From Comparison
                                </div>
                            }
                        </div>
                        {availabilityArray.map((value, index) => {
                                
                                const startDate= new Date(selected);
                                const indexDate = startDate.setDate(startDate.getDate() + index);

                                // explictly calling out the fragement allows me to add a key to it to avoid needing to add a redundant <div> that will impact styling
                                return (                                                                
                                        <React.Fragment key={`${product.productCode}-cell-${index}`}>
                                            {value === "empty" && 
                                                <div className="pricingCell cellUnavailable">
                                                    <p className="pricingDate">
                                                        {new Intl.DateTimeFormat('en-US', dateOptions).format(indexDate)}
                                                    </p>
                                                    <div className="" data-dayindex={`${product.productCode}-${dateIndex + index}`} key={`${product.productCode}-${dateIndex + index}`}>
                                                        None
                                                    </div>
                                                </div>
                                            }
                                            {value === true && 
                                                <div className="pricingCell cellAvailable" onClick={event => togglePurchaseModal(event, product, indexDate)}>
                                                    <p className="pricingDate">
                                                        {new Intl.DateTimeFormat('en-US', dateOptions).format(indexDate)}
                                                    </p>
                                                    <div className="" data-dayindex={`${product.productCode}-${dateIndex + index}`} key={`${product.productCode}-${dateIndex + index}`}>
                                                        ${product.priceOnline}
                                                    </div>
                                                    {product.productType === 'Group' &&
                                                        <div className="cellRewardsRate">
                                                            <IconContext.Provider value={{ className:'rewardsIcon'}}>
                                                                    <FaMountain/> 
                                                            </IconContext.Provider>
                                                            <p>${Math.round(product.priceOnline * 0.8)}</p>
                                                        </div>
                                                    }
                                                </div>
                                            }
                                            {!value && 
                                                <div className="pricingCell cellSoldOut">
                                                    <p className="pricingDate">
                                                        {new Intl.DateTimeFormat('en-US', dateOptions).format(indexDate)}
                                                    </p>
                                                    <div className="" data-dayindex={`${product.productCode}-${dateIndex + index}`} key={`${product.productCode}-${dateIndex + index}`}>
                                                        Sold Out
                                                    </div>
                                                </div>
                                            }
                                        </React.Fragment>
                                    
                                )
                            }

                        )}                
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

export default ProductTable;