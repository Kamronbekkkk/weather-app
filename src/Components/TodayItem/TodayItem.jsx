import React from 'react';
import './TodayItem.css';

function TodayItem({ currentTime, currentTemp, currentIcon }) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    let currentHour = new Date(currentTime * 1000).getHours();
    let currentHourReal = currentHour > 12 ? (currentHour - 12) + ' PM' : currentHour + ' AM';
    // let currentDate = new Date(currentTime * 1000).getDate() 
    // let currentMonths = months[ new Date(currentTime * 1000).getMonth() -1]
    

    return (
        <>
            <li className="weather-card">
                <strong className="time">{currentHourReal}</strong>
                <img className="weather-card-img" src={`https://openweathermap.org/img/wn/${currentIcon}@2x.png`} alt="" />
                <span className="temp">{currentTemp}°C</span>
            </li>
        </>
    );
}

export default TodayItem;
