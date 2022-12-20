import { React, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go';
import { GrTransaction } from 'react-icons/gr';
import { SlArrowRight } from 'react-icons/sl';
import { MdAdsClick } from 'react-icons/md';
import { BsQuestionLg } from 'react-icons/bs';
import { HiMinus } from 'react-icons/hi';
import '../../styles/featuresElement.css';

const FeaturesElement = () => {

    // state for whether the feature element is displayed (expanded) or hidden
    const [isOpen, setIsOpen] = useState(false);

    // toggle for element (display vs hidden)
    const toggleElement = (event) => {
        isOpen ? document.getElementById("featuresDisplay").className = "featuresHidden" : document.getElementById("featuresDisplay").className = "";
        setIsOpen(!isOpen)
    }

    return (
        <section className="featuresElement">
            <div className="featuresPanel" onClick={event => toggleElement(event)}>
                <p>View Features Detail</p>
                <div className="featuresIconContainer">
                    {!isOpen &&
                        <IconContext.Provider value={{ className: "featuresPanelIcon"}}>
                            <GoPlus />
                        </IconContext.Provider>
                    }
                    {isOpen &&
                        <IconContext.Provider value={{ className: "featuresPanelIcon"}}>
                            <HiMinus />
                        </IconContext.Provider>
                    }
                </div>
            </div>
            <div id="featuresDisplay" className="featuresHidden">
                <div className="featuresContainer">
                    <div>
                        <IconContext.Provider value={{ className: "featureIcon"}}>
                            <GrTransaction />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div className="featureCopy">
                            <h4>Inability to Cross-sell and Fill Idle Capacity</h4>
                            <p>
                                When a preferred product is not available, there is no dynamic way to promote an available alternative.
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                            <div className="featureCopy">
                            <h4>Solution:</h4>
                            <p>
                                Dynamically pull inventory and pricing zdirectly onto search screen to show 7-day availability: Easily cross-sell when preferred product is not available
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div>
                        <IconContext.Provider value={{ className: "featureIcon"}}>
                            <MdAdsClick />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div className="featureCopy">
                            <h4>Too Many Clicks to Determine Availability</h4>
                            <p>
                                Customers currently need to drill too far into the product purchase funnel to determine availability and add to cart.
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                        <div className="featureCopy">
                            <h4>Solution:</h4>
                            <p>
                                Create a single page experience. Use modals to provide more detail for new customers and eliminate need for product detail page: Add to Cart direct from search page.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div>
                        <IconContext.Provider value={{ className: "featureIcon"}}>
                            <BsQuestionLg />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div className="featureCopy">
                            <h4>Too Many Options</h4>
                            <p>
                                Insufficient filter options and no way to compare products and availability if looking to book a diverse product set. (e.g. for a family with differing ages and skill levels).
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                        <div className="featureCopy">
                            <h4>Solution:</h4>
                            <p>
                                Offer a 'comparison' option to customize product view and isolate products independent of filters. Comparisons could be leveraged as 'favorites' that persist in the user's browser storage or even account data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default FeaturesElement;