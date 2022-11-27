import React, {forwardRef, useState} from 'react';
import useMedia from '../../hooks/useMedia';
import DatePicker from 'react-datepicker';
import Filter from './filter';
import Sort from './sort';
import ProductCardContainerMobile from './productCardContainerMobile';
import ProductTable from './productTable';
import { IconContext } from 'react-icons/lib';
import { BsCalendar3 } from 'react-icons/bs';
import { FaMountain } from 'react-icons/fa';
import { FaInfoCircle } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import '../../styles/datePicker.css';
import '../../styles/checkbox.css';

const SearchWidget = ({selectedDate, setSelectedDate, startDate, endDate, dateIndex, setDateIndex, activeTab}) => {

    // use the isMobile hook to specfiy the screen width that would trigger mobile styling
    const isMobile = useMedia('(max-width: 1080px)');

    // status for whether the Hide Unavailable checkbox is checked or not
    const [hideUnavailable, setHideUnavailable] = useState(false);

    // custom input (styling and format) for the react-datepicker
    const DatePickerCustomInput = forwardRef(({value, onClick}, ref) => (
        <div className="datePicker" onClick={onClick} ref={ref}>
            <div className="datePickerIconContainer">
                <IconContext.Provider value={{ className: "datePickerIcon"}}>
                    <BsCalendar3 />
                </IconContext.Provider>
            </div>
            <p>
                {value}
            </p>
        </div>
    ))

    // updates state with the new selected date from the date picker, and also sets the date index
    const dateChange = (date) => {
        setSelectedDate(date);
        setDateIndex(Math.abs(Math.round((date - startDate) / (1000 * 3600 * 24))));  // assign a date index that equals the number of days between the chosen and the start date. This allows me to use the simplified two week availability array in the json file to simulate inventory validation. This function takes the absolute number after rounding the result of the date difference in milliseconds, converted to days
    }

    // toggles the hide unavailable check box status
    const toggleChecked = (event) => {
        event.stopPropagation();
        setHideUnavailable(!hideUnavailable);
    };

    return (
        <div>
            <DatePicker 
                selected={selectedDate} 
                onChange={date => dateChange(date)} 
                dateFormat='EEE, MMMM dd, yyyy'  // Unicode formatting
                minDate={startDate}
                maxDate={endDate}
                popperPlacement="bottom"
                customInput={<DatePickerCustomInput />}
            />
            <Filter />
            <div className="sortContainer">              
                <Sort />
                <div className="rewardsContainer">
                    <div>
                        SAVE
                    </div>
                    <div className="rewardsBarAngle"></div>
                    <div className="rewardsBarTextContainer">
                        <p>PASSHOLDERS <strong> &nbsp;GET 20% OFF</strong>
                            <IconContext.Provider value={{ className: "rewardsinfoIcon"}}>
                                <FaInfoCircle />
                            </IconContext.Provider>
                        </p>
                        <p>
                            <IconContext.Provider value={{ className:'rewardsIcon'}}>
                                <FaMountain/> 
                            </IconContext.Provider>
                            Look for the icon on eligible products</p>
                    </div>
                </div>
                <div className="checkboxContainer">
                    <label className="checkboxLabel" >
                        <input type="checkbox" id="hideUnavailable" defaultChecked={false} className="hideUnavailableCheckbox"/>
                        <span className='custom-checkbox'  onClick={event => toggleChecked(event)} ></span>
                    </label>
                    <p className="">
                        Hide Unavailable
                    </p>
                </div>
            </div>
            {isMobile && <ProductCardContainerMobile
                dateIndex = {dateIndex}
                hideUnavailable = {hideUnavailable}
                activeTab = {activeTab}
            /> }
            {!isMobile && 
                <section className="productTable">
                    <ProductTable
                    selected={selectedDate}
                    dateIndex = {dateIndex}
                    hideUnavailable = {hideUnavailable}
                    activeTab = {activeTab}
                    />
                </section> 
            }
        </div>
    )

}

export default SearchWidget;

