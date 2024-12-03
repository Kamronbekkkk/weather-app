import React from 'react'
import HighlightsItem from '../HighlightsItem/HighlightsItem';
import './Highlights.css'
import { TbWindElectricity } from "react-icons/tb";
import { LuSunrise } from "react-icons/lu";
import { FiSunset } from "react-icons/fi";



export default function Highlights({ airQuality, currentWeather }) {
    console.log(airQuality)
    
    // sunset

    let sunsetHour =  new Date(currentWeather?.sys.sunset * 1000).getHours() 
    let sunsetHourReal = sunsetHour > 12 ? sunsetHour - 12 : sunsetHour  
    let sunsetMinute = new Date(currentWeather?.sys.sunset * 1000).getMinutes()
    // sunrise
    let sunriseHour =  new Date(currentWeather?.sys.sunrise * 1000).getHours() 
    let sunriseHourReal = sunsetHour > 12 ? sunsetHour - 12 : sunriseHour  
    let sunriseMinute = new Date(currentWeather?.sys.sunset * 1000).getMinutes()
    // isAMorPM
    let isAMorPM = sunsetHour > 12 ? 'PM' : 'AM' 

    let airQualityName = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor',]
    let airStatus = airQualityName[airQuality?.list[0].main.aqi - 1]

    let sunriseTime = `${sunriseHourReal} : ${sunriseMinute} ${isAMorPM}`
    let sunsetTime =`${sunsetHourReal} : ${sunsetMinute} ${isAMorPM}`




    return (
        <>
            <div className="highlights">
                <h2 className="highlights__title">Today's Highlights</h2>
                <div className="highlights__container">
                    <div className="highlight-card">
                        <h3 className="highlight-card__title">Air Quality Index</h3>
                        <span className="highlight-card__icon"><TbWindElectricity /></span>
                        <ul className="highlight-card__content">
                            <HighlightsItem airType={'CO'} airData={airQuality?.list[0].components.co} />
                            <HighlightsItem airType={'NH3'} airData={airQuality?.list[0].components.nh3} />
                            <HighlightsItem airType={'NO'} airData={airQuality?.list[0].components.no} />
                            <HighlightsItem airType={'NO2'} airData={airQuality?.list[0].components.no2} />
                            <HighlightsItem airType={'O3'} airData={airQuality?.list[0].components.o3} />
                            <HighlightsItem airType={'PM2.5'} airData={airQuality?.list[0].components.pm2_5} />
                            <HighlightsItem airType={'PM10'} airData={airQuality?.list[0].components.pm10} />
                            <HighlightsItem airType={'SO2'} airData={airQuality?.list[0].components.so2} />

                        </ul>
                        <span className={`highlight-card__status  ${airStatus?.toLowerCase().slice(0, 4)}`}>{airStatus}</span>
                    </div>


                    <div className="highlight-card-2">
                        <h3 className="highlight-card__title">Sunrise & Sunset</h3>
                        <div className="highlight-card__content-2">
                            <div className="highlight-card__row-2">
                                <span className="highlight-card__icon-2"><LuSunrise /></span>
                                <p className="highlight-card__value-2">{sunriseTime}</p>
                                <p className="highlight-card__label-2">Sunrise</p>
                            </div>
                            <div className="highlight-card__row-2">
                                <span className="highlight-card__icon-2"><FiSunset /></span>
                                <p className="highlight-card__value-2">{sunsetTime}</p>
                                <p className="highlight-card__label-2">Sunset</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
