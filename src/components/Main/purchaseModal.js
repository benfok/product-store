import React, {useState, useEffect, useContext} from 'react';
import ModalContext from '../../contexts/ModalContext';
import { IconContext } from 'react-icons/lib';
import { FaMountain } from 'react-icons/fa';
import '../../styles/modal.css';

const PurchaseModal = ({product, date}) => {

    const [participants, setParticipants] = useState("participants-1")
    const [days, setDays] = useState(["days-1", 1]);
    const [location, setLocation] = useState("location-1")
    const [groupAddOns, setGroupAddOns] = useState([]);
    const [totalPrice, setTotalPrice] = useState([product.priceOnline, product.priceOnline * 0.8])
    const {togglePurchaseModal} = useContext(ModalContext); 

    // handle updates to state for # of participants (private lessons)
    const changeParticipants = (event) => {
        document.getElementById(participants).className = '';
        event.target.className = "participantsActive";
        setParticipants(event.target.id);
    }

    // handle updates to state for number of days (group lessons)
    const changeDays = (event) => {
        document.getElementById(days[0]).className = '';
        event.currentTarget.className = "daysActive";
        setDays([event.currentTarget.id, event.currentTarget.textContent]);
    }

    useEffect(() => {
        // calculate new rate after days change
        let newOnline = product.priceOnline;
        days[1] > 1 ? newOnline = Math.floor(days[1] * product.priceOnline * 0.8) : newOnline = product.priceOnline;

        const newTotal = [...totalPrice];
        newTotal[0] = newOnline;
        newTotal[1] = Math.floor(newOnline * 0.8)
        setTotalPrice(newTotal); // update total price array
    }, [days]);


    // toggle which location is selected
    const changeLocation = (event) => {
        document.getElementById(location).className = "location";
        event.currentTarget.className = "location locationActive";
        setLocation(event.currentTarget.id);
    }

    // toggle whether add ons are selected or not. This updates a state array that is then referenced to adjust price
    const toggleAddOns = (event, code, price) => {
        if (event.currentTarget.className === "addOn addOnActive") {
            event.currentTarget.className = "addOn";
            setGroupAddOns(
                arr => arr.filter(item => item[0] !== code) // remove the add on from the state array
            );
        } else {
            event.currentTarget.className = "addOn addOnActive"; 
            setGroupAddOns( arr => [...arr, [code, price]]); // add the addOn to the state array
        }
    }

    // used to calculate the sum of add-ons based on add on rate and number of days. Returns a number that can be directly added to the lesson total
    const calculateAddOns = () => {
        let sum = 0

        for(let i = 0; i < groupAddOns.length; i++) {
            sum += parseInt(groupAddOns[i][1] * days[1])
        }

        return sum;
    }

    // define date format for displaying in pricing cells
    const dateOptions = {
        weekday: 'long',
        month: 'short',
        day:'numeric',
        year: 'numeric'
    }

        return (
                <>
                    <div className="modalHeader">
                        <h3>{product.productName}</h3>
                    </div>
                    <div className="productContainer">
                        <div className="prodCopyContainerItem">
                            <div className="prodAttributesModal">
                                <div>
                                    <h4>LESSON TYPE</h4>
                                    <p className="productAttValueModal">{product.productType}</p>
                                </div>
                                <div>
                                    <h4>START TIME</h4>
                                    <p className="productAttValueModal">{product.startTime}</p>
                                </div>
                                <div>
                                    <h4>DURATION</h4>
                                    <p className="productAttValueModal">{product.duration}</p>
                                </div>
                            </div>
                            <h4>DESCRIPTION</h4>
                            <p>
                                {product.description}
                            </p><br/>
                            <h4>DETAILS</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <ul>
                                <li>Key Point 1 - Lorem ipsum dolor sit amet</li>
                                <li>Key Point 2 - Lorem ipsum dolor sit amet</li>
                                <li>Key Point 3 - Lorem ipsum dolor sit amet</li>
                                <li>Key Point 4 - Lorem ipsum dolor sit amet</li>
                                <li>Key Point 5 - Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div className="prodConfigContainer">
                            <h4>DATE OF LESSON:</h4>
                            <div className="modalDate">
                                {new Intl.DateTimeFormat('en-US', dateOptions).format(date)}
                            </div>
                            <h4>SELECT LOCATION:</h4>
                            <div id="locationSelect" className="locationSelectModal">
                                <div className="locationOption">
                                    <div id="location-1" className="location locationActive" onClick={event => changeLocation(event)}><span className="modalCheckbox"></span></div>
                                    <div>
                                        <p className="locationName">Base Area</p>
                                        <p className="locationSub">All Abilities, ski and snowboard</p>
                                    </div>
                                </div>
                                <div className="locationOption">
                                    <div id="location-2" className="location" onClick={event => changeLocation(event)}><span className="modalCheckbox"></span></div>
                                    <div>
                                        <p className="locationName">Mid-Mountain</p>
                                        <p className="locationSub">Intermediate/Advanced skiers and snowboards only</p>
                                    </div>
                                </div>
                                <div className="locationOption">
                                    <div id="location-3" className="location" onClick={event => changeLocation(event)}><span className="modalCheckbox"></span></div>
                                    <div>
                                        <p className="locationName">Special Hotel</p>
                                        <p className="locationSub">All Abilities, ski and snowboard</p>
                                    </div>
                                </div>
                            </div>
                            {product.productType === 'Private' &&
                                <>
                                    <h4>NUMBER OF PARTICIPANTS:</h4>
                                    <div id="participantsSelect" className="participantsSelectModal">
                                        <div id="participants-1" className="participantsActive" onClick={event => changeParticipants(event)}>1</div>
                                        <div id="participants-2" onClick={event => changeParticipants(event)}>2</div>
                                        <div id="participants-3" onClick={event => changeParticipants(event)}>3</div>
                                        <div id="participants-4" onClick={event => changeParticipants(event)}>4</div>
                                        <div id="participants-5" onClick={event => changeParticipants(event)}>5</div>
                                        <div id="participants-6" onClick={event => changeParticipants(event)}>6</div>
                                    </div>
                                    <h4>COMPLETE INQUIRY:</h4>
                                        <div className="priceContainerModal">
                                            <div className="priceRowModal">
                                                <p className="windowRateModal">Window:</p>
                                                <p className="windowRateModal windowRateModalPrice">${product.priceOffline}</p>
                                            </div>
                                            <div className="priceRowModal">
                                                <p className="onlineRateModal">Online:</p>
                                                <p className="onlineRateModal">${product.priceOnline}</p>
                                            </div>
                                        </div>
                                        <div className="savingsContainerModal">
                                            <p className="priceSavingsModal">Savings ${product.priceOffline - product.priceOnline}</p>
                                        </div>
                                        <div className="buttonContainerModal">
                                            <button className="btn secondaryCTA" onClick={event => togglePurchaseModal(event)}>Add to Cart</button>
                                        </div>
                                </>
                            }
                            {product.productType === 'Group' &&
                                <>
                                    <h4>NUMBER OF DAYS:</h4>
                                    <div id="daysSelect" className="daysSelectModal">
                                        <div id="days-1" className="daysActive" onClick={event => changeDays(event)}>1</div>
                                        <div id="days-2" onClick={event => changeDays(event)}>2</div>
                                        <div id="days-3" onClick={event => changeDays(event)}>3</div>
                                        <div id="days-4" onClick={event => changeDays(event)}>4</div>
                                        <div id="days-5" onClick={event => changeDays(event)}>5</div>
                                    </div>
                                    <div className="priceContainerModal">
                                        <div className="priceRowModal">
                                            <p className="windowRateModal">Window:</p>
                                            <p className="windowRateModal windowRateModalPrice">{days[1] > 1 ? `$${(Math.floor(days[1] * product.priceOffline * 0.8))}` : `$${product.priceOffline}`}</p>
                                        </div>
                                        <div className="priceRowModal">
                                            <p className="onlineRateModal">Online:</p>
                                            <p className="onlineRateModal">${totalPrice[0]}</p>
                                        </div>
                                        <div className="priceRowModal">
                                            <p className="rewardsRateModal">
                                            <IconContext.Provider value={{ className:'rewardsIcon'}}>
                                                    <FaMountain/> 
                                            </IconContext.Provider>
                                            Rewards</p>
                                            <p className="rewardsRateModal">${totalPrice[1]}</p>
                                        </div>
                                    </div>
                                    <h4>CONFIGURE ADD-ONS:</h4>
                                        <div id="addOnSelect" className="addOnSelectModal">
                                            {product.addOns.map((item, index) => {
                                                return (
                                                    <div className="addOnOption" key={`addOn-${item[0]}`}>
                                                        <div className="addOnRowItem-name">
                                                        <div id={item[0]} className="addOn" onClick={event => toggleAddOns(event, item[0], item[3])}><span className="modalCheckbox"></span></div>
                                                        <div>
                                                            <p className="addOnName">{`Include ${item[1]}`}</p>
                                                            <p className="addOnSub">{item[2]}</p>
                                                        </div>
                                                        </div>
                                                        <div className="addOnRowItem-rate">
                                                        {days[1] < 2 ? <p>{`${days[1]} day`}</p> : <p>{`${days[1]} days`}</p>}
                                                        <div className="addOnModalRates">
                                                            <p className="windowRateModal windowRateModalPrice">${item[4] * days[1]}</p>   
                                                            <p className="onlineRateModal">${item[3] * days[1]}</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    <h4>COMPLETE PURCHASE:</h4>
                                    <div className="priceContainerModal">
                                        <div className="priceRowModal">
                                            <p className="onlineRateModal">Online Total:</p>
                                            <p className="onlineRateModal">${totalPrice[0] + calculateAddOns()}</p>
                                        </div>
                                        <div className="priceRowModal">
                                            <p className="rewardsRateModal">
                                                <IconContext.Provider value={{ className:'rewardsIcon'}}>
                                                    <FaMountain/> 
                                                </IconContext.Provider>
                                            Rewards</p>   
                                            <p className="rewardsRateModal">${totalPrice[1] + calculateAddOns()}</p>
                                        </div>
                                    </div>
                                    <div className="buttonContainerModal">
                                        <button className="btn secondaryCTA" onClick={event => togglePurchaseModal(event)}>Add to Cart</button>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </>
            )
}

export default PurchaseModal;