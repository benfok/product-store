import { React, useState } from 'react';
import { IconContext } from 'react-icons/lib';
import { GoPlus } from 'react-icons/go';
import { SlArrowRight } from 'react-icons/sl';
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
                            <GoPlus />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div>
                            <h4>Inability to Cross-sell and Fill Idle Capacity</h4>
                            <p>
                                When a preferred product is not available, there is no dynamic way to promote an available alternative.
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                        <div>
                            <h4>Solution:</h4>
                            <p>
                                Dynamically pull inventory directly onto search screen to show 7-day availability: Easily cross-sell when preferred product is not available
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div>
                        <IconContext.Provider value={{ className: "featureIcon"}}>
                            <GoPlus />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div>
                            <h4>Inability to Cross-sell and Fill Idle Capacity</h4>
                            <p>
                                When a preferred product is not available, there is no dynamic way to promote an available alternative.
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                        <div>
                            <h4>Solution:</h4>
                            <p>
                                Dynamically pull inventory directly onto search screen to show 7-day availability: Easily cross-sell when preferred product is not available
                            </p>
                        </div>
                    </div>
                </div>
                <div className="featuresContainer">
                    <div>
                        <IconContext.Provider value={{ className: "featureIcon"}}>
                            <GoPlus />
                        </IconContext.Provider>
                    </div>
                    <div className="featureCopyContainer">
                        <div>
                            <h4>Inability to Cross-sell and Fill Idle Capacity</h4>
                            <p>
                                When a preferred product is not available, there is no dynamic way to promote an available alternative.
                            </p>
                        </div>
                        <IconContext.Provider value={{ className: "compareIcon"}}>
                            <SlArrowRight />
                        </IconContext.Provider>
                        <div>
                            <h4>Solution:</h4>
                            <p>
                                Dynamically pull inventory directly onto search screen to show 7-day availability: Easily cross-sell when preferred product is not available
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default FeaturesElement;