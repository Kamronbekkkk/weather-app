import React from 'react';
import './Weather.css';
import { TbEyeSearch } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
import { FaCompass } from "react-icons/fa";
import { PiThermometerHotFill } from "react-icons/pi";
import { IoNavigateOutline } from "react-icons/io5";

export default function Weather({ currentWeather }) {

  console.log(currentWeather)
  return (
    <div className="weather">
      <div className="weather-item">
        <span className="label">Humidity</span>
        <span className="icon"><FaDroplet /></span>
        <span className="value">{currentWeather?.main.humidity}%</span>
      </div>
      <div className="weather-item">
        <span className="label">Pressure</span>
        <span className="icon"><IoNavigateOutline /></span>
        <span className="value">{currentWeather?.main.pressure}  hPa</span>
      </div>
      <div className="weather-item">
        <span className="label">Visibility</span>
        <span className="icon"><TbEyeSearch /></span>
        <span className="value">{currentWeather?.main.sea_level} km</span>
      </div>
      <div className="weather-item">
        <span className="label">Wind Speed</span>
        <span className="icon"><FaCompass /></span>
        <span className="value">{currentWeather?.wind.speed}m/s</span>
      </div>
      <div className="weather-item">
        <span className="label">Feels Like</span>
        <span className="icon"><PiThermometerHotFill /></span>
        <span className="value">{currentWeather?.main.feels_like}°C</span>
      </div>
    </div>
  );
};


