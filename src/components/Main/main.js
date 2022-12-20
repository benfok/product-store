import React, {useState, useContext} from 'react';
import useMedia from '../../hooks/useMedia';
import CompareContext from '../../contexts/CompareContext';
import SearchWidget from './searchWidget';
import '../../styles/searchWidget.css';
import image1 from '../../assets/placeholder1.png';
import { IconContext } from 'react-icons/lib';
import { ProductProvider } from '../../contexts/ProductContext';
import { TbArrowAutofitWidth } from 'react-icons/tb';
import ContentElement from './contentElement';
import FeaturesElement from './featuresElement';

const Main = () => {

    // determine if screen size is less than 1080px and render accordingly
    const isMobile = useMedia('(max-width: 1080px)');

    const today = new Date();

    // start date is the first selectable date for the calendar is one day out from today (booking window)
    const startDate = today.setDate(today.getDate() + 1);
    // end date is the date 14 days out from the start date. Creating a 14 day selectable period for the purpose of this demonstration
    const endDate = new Date(startDate + 12096e5); // 12096e5 = 14 days in milliseconds

    // date selected (start date)
    const [selectedDate, setSelectedDate] = useState(startDate);

    // the date index essentially stores the difference between the state selected and the start date of the calendar. This is important later for simulating inventory and availability within the product table
    const [dateIndex, setDateIndex] = useState(0);

    // status to hold which tab is active 
    const [activeTab, setactiveTab] = useState("by date");

    // comparsions context holds information about products selected for comparison
    const {comparisons} = useContext(CompareContext);

    // sets the active tab
    const searchByDate = (event) => {
        if(activeTab === "by date") {
            return
        } else {
            setactiveTab("by date");
            event.target.className = "searchByBtn searchByActive";
            event.target.nextElementSibling.className = "searchByBtn";
        }
    }

    const compareLessons = (event) => {
        if(activeTab === "compare") {
            return
        } else {
            setactiveTab("compare");
            event.target.className = "searchByBtn searchByActive";
            event.target.previousElementSibling.className = "searchByBtn";
        }
    }

    // render the search widget. Wrapping the widget in the Product Provider ensures that if the product data changes as a result of changes to the search filters, the results re-render

    return (
        <main>
            {isMobile &&
                <div className="mobilePlaceholder">
                    <IconContext.Provider value={{ className: "mobileMainIcon"}}>
                        <TbArrowAutofitWidth />
                    </IconContext.Provider>
                    <p>This Product Store concept is currently only configured for screen widths 1080 pixels or wider.</p><br/>
                    <p>For a mobile version, please contact:<br/><a href="mailto:ben@tidylines.co">ben@tidylines.co</a></p>
                </div>
            }
            {!isMobile && 
                <>
                    <ContentElement 
                        imageUrl={image1}
                        header="Product Store Concept"
                        contentHtml={
                            // use the FCE to just promote the concept and the idea. Explain abut mobile only, the 14 day window and inventory replication for 7 days out. Note that this may be challenging.

                            // then combine the issues with the soluctions in an element below


                            <>
                                <p>This is a concept webpage, designed from scratch to mimic Vail's ecommerce template for selling ski and snowboard lessons, and showcasing solutions to some of the perceived shortfalls of the existing system. </p>
                                <p>For more detail, expand the Feature Detail section below of view the README file within the GitHub repo.</p>
                                <h4>NOTES ABOUT THIS MOCK:</h4>
                                <ul>
                                    <li>Single page mock up: Navigation and cart do not exist</li>
                                    <li>Viewing desktop mock only: Mobile concept available on request</li>
                                    <li>Mock limited to dates within 14 days of today with availability simulated to imitate inventory</li>
                                </ul>
                                <div className="btn secondaryCTA">
                                    <a href="https://github.com/benfok/product-store" target="_blank" rel="noopener noreferrer">
                                            View GitHub Repo
                                    </a>
                                </div>
                            </>

                        }
                    />
                    <FeaturesElement />
                    <div className="searchByContainer">
                        <div className="searchByBtn searchByActive" onClick={event => searchByDate(event)}>Search<br/>by Date</div>
                        <div className="searchByBtn" onClick={event => compareLessons(event)}>Compare<br/>Lessons ({comparisons.length})</div>
                    </div>
                    <ProductProvider>
                        <div className="resultsContainer">
                            {activeTab === "by date" && <SearchWidget 
                                selectedDate={selectedDate} 
                                setSelectedDate={setSelectedDate} 
                                startDate={startDate}
                                endDate={endDate}
                                dateIndex={dateIndex}
                                setDateIndex={setDateIndex}
                                activeTab={activeTab}
                            />}
                            {activeTab === "compare" && <SearchWidget 
                                selectedDate={selectedDate} 
                                setSelectedDate={setSelectedDate} 
                                startDate={startDate}
                                endDate={endDate}
                                dateIndex={dateIndex}
                                setDateIndex={setDateIndex}
                                activeTab={activeTab}
                            />}
                        </div>
                    </ProductProvider>
                </>
            }
        </main> 
    )
}

export default Main;