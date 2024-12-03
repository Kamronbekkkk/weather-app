import React from 'react';
import './Today.css';
import TodayItem from '../TodayItem/TodayItem';

export default function Today  ({forecast})  {

  let todayAt = forecast?.list.slice(0, 8)

  return (
    <div className="today-weather">
      <h2>Today at</h2>
      <ul className="weather-cards">
        {
          todayAt?.map((el) =><TodayItem currentTime={el.dt} currentTemp={el.main.temp} currentIcon={el.weather[0].icon} />)
        }
      </ul>
    </div>
  );
};

