import React, {useState, useContext} from 'react';
import CompareContext from '../../contexts/CompareContext';
import SearchWidget from './searchWidget';
import '../../styles/searchWidget.css';
import image1 from '../../assets/placeholder1.png';
import { ProductProvider } from '../../contexts/ProductContext';
import ContentElement from './contentElement';

const Main = () => {

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
        <div>
            <ContentElement 
                imageUrl={image1}
                header="Product Store Concept"
                contentHtml={
                    <>
                        <p>Test</p>
                        <p>Benefits:</p>
                        <ul>
                            <li>Offers comparison option to customize product view and isolate products independent of filters</li>
                            <li>Multiple filters and sort options</li>
                            <li>Eliminates need for product detail page: Add to Cart direct from widget via modal</li>
                            <li>Pulls inventory to show 7-day availability: Easily cross-sell alternative products when preferred is not available</li>
                            <li>Information available via info modala to guide inexperienced purchasers</li>
                            <li>Comparisons could be leveraged as "favorites" that persist in the user's browser storage or even account data</li> 
                        </ul>
                    </>

                }
            />
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
        </div>
    )
}

export default Main;