import { React, useState} from "react";
import { IconContext } from 'react-icons/lib';
import {FaClock, FaMapMarkerAlt, FaInfoCircle} from 'react-icons/fa';
import {IoMdPin} from 'react-icons/io';
import '../../styles/card.css';


const Card = ({cardID, image, imageAlt, heading, shortDesc, longDesc, ctaText, hours, location}) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState('info');

    const changeTab = (value) => {
        setActiveTab(value);
    }

    const delay = () => {
        setIsExpanded(!isExpanded);
    }

    const expandCard = (value) => {
        if (!value) {
            document.querySelector(`[data-id='content-${cardID}'`).style.height = '350px';
            document.querySelector(`[data-id='image-${cardID}'`).style.height = '70px';
            setTimeout(delay, 600);
            return
        }       
        if (!isExpanded) {
            document.querySelector(`[data-id='content-${cardID}'`).style.height = '350px';
            document.querySelector(`[data-id='image-${cardID}'`).style.height = '70px';
            changeTab(value)
            setTimeout(delay, 600);
        } else {
            changeTab(value)
        }
    }

    const shrinkCard = () => {
        document.querySelector(`[data-id='content-${cardID}'`).style.height = '180px';
        document.querySelector(`[data-id='image-${cardID}'`).style.height = '240px';
        setIsExpanded(!isExpanded);
    }

    // create a function to appendChild to add the longDesc after a timeout
    // the hours and location icons change the tab state and set the expanded to true - and use a delay to add the content?


    return (

        <div className="cardContainer">
            <div className="cardImgCont" data-id={`image-${cardID}`}>
                <img className="cardImg" src={image} alt={imageAlt}/>
            </div>
            <div className="cardContentCont" data-id={`content-${cardID}`}>
                    <>                  
                        <h2 className="cardHeading">{heading}</h2>
                        <div className="cardContent">
                            <p className="cardShortDesc">{shortDesc}</p>
                            {(isExpanded && activeTab === 'info') && <p>{longDesc}</p>}
                            {(isExpanded && activeTab === 'hours') && <>{hours}</>}
                            {(isExpanded && activeTab === 'location') && <>{location}</>}
                        </div>
                        {isExpanded && <p onClick={() => shrinkCard()} className="readMore">read less...</p> }
                        {!isExpanded && <p onClick={() => expandCard()} className="readMore">read more...</p> }
                    </>
            </div>
            <div className='ctaCont'>
                <div className={(hours || location) ? "cardIconCont" : "cardIconContFull"}>
                    <a className="btn secondaryCTA" href="#">{ctaText}</a>
                </div>
                {(hours || location) &&
                <div className="cardIconCont">
                        <div className={activeTab === "hours" ? "cardIcon activeCardIcon" : "cardIcon"} onClick={() => expandCard('hours')}>
                            <FaClock />
                        </div>
                        <div className={activeTab === "location" ? "cardIcon activeCardIcon" : "cardIcon"} onClick={() => expandCard('location')}>
                            <FaMapMarkerAlt />
                        </div>
                        <div className={activeTab === "info" ? "cardIcon activeCardIcon" : "cardIcon"} onClick={() => expandCard('info')}>
                            <FaInfoCircle />
                        </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Card;