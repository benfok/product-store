import React, {useState, useContext} from 'react';
import CompareContext from '../../contexts/CompareContext';
import SearchWidget from './searchWidget';
import '../../styles/searchWidget.css'
import { ProductProvider } from '../../contexts/ProductContext';

const Main = () => {

    const today = new Date();
    const startDate = today.setDate(today.getDate() + 1);
    const endDate = new Date(startDate + 12096e5); // 12096e5 = 14 days in milliseconds
    const [selectedDate, setSelectedDate] = useState(startDate);
    const [dateIndex, setDateIndex] = useState(0);
    const [activeTab, setactiveTab] = useState("by date");
    const {comparisons} = useContext(CompareContext);

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

    return (
        <div>
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