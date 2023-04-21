import React from "react";
import Card from "./card";
import '../../styles/card.css';
import image1 from '../../assets/placeholder1.png';


const CardMock = () => {
    return (
        <main>
            <section className="sectionCard">
                <Card 
                    cardID= "002"                    
                    image = {image1}
                    imageAlt = "test"
                    heading = "Snow Tubing"
                    shortDesc = "Enjoy the thrill of sliding down a slope while wedged inside an inner tube."
                    longDesc = "Yes, believe it or not it is rather exciting. You might get a wet and sometimes even bruised bottom, but it's as close as you can get to skiing, without actually skiing. It's like a water park, just with ice. And more clothing."
                    ctaText="Book Now"
                />
                <Card 
                    cardID= "001"
                    image = {image1}
                    imageAlt = "test"
                    heading = "Snow Tubing"
                    shortDesc = "Enjoy the thrill of sliding down a slope while wedged inside an inner tube."
                    longDesc = "Yes, believe it or not it is rather exciting. You might get a wet and sometimes even bruised bottom, but it's as close as you can get to skiing, without actually skiing. It's like a water park, just with ice. And more clothing."
                    ctaText="Book Now"
                    hours = {
                        <div>
                            <h4>Hours of Operation</h4>
                            <table className="cardTable">
                                <tr>
                                    <td>Monday</td>
                                    <td>10:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>10:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>10:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>10:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>10:00am - 3:00pm</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>9:00am - 4:00pm</td>
                                </tr>
                                <tr>
                                    <td>Sunday</td>
                                    <td>9:00am - 4:00pm</td>
                                </tr>
                            </table>
                        </div>
                    }
                    location = {
                        <div>
                            <h4>Location</h4>
                            <p>1234 Snow Street</p>
                            <p>Vail, CO 88165</p>
                            <div>
                                <a href="#" class="linkCTA">View on Google Maps</a>
                            </div>
                            <br/>
                        </div>
                    }
                />
            </section>
        </main>
    )
}

export default CardMock;