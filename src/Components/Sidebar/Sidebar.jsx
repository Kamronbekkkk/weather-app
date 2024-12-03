import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import SidebarItems from '../SidebarItems/SidebarItems';
import './Sidebar.css'

export default function SideBar({ currentWeather, forecast }) {


    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    console.log()
    const currentDate = {
        day: weekdays[(new Date(currentWeather?.dt * 1000)).getDay() - 1],
        date: (new Date(currentWeather?.dt * 1000)).getDate(),
        months: months[(new Date(currentWeather?.dt * 1000)).getMonth()],
        year: (new Date(currentWeather?.dt * 1000)).getFullYear()
    }
    return (
        <>
            <div className="sidebar">
                <div className="container-top">
                    <div className="sidebar__inner">
                        <div className="sidebar-top">
                            <div className="sidebar__inner-top">
                                <p className="sidebar-top__p">
                                    Now
                                </p>
                                <div className="sidebar-box">
                                    <h2 className="sidebar-top__h2">
                                        {currentWeather?.main.temp}&deg;C
                                    </h2>
                                    <img src={`https://openweathermap.org/img/wn/${currentWeather?.weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <p className="sidebar-top__p">
                                    {currentWeather?.weather[0].description}
                                </p>
                            </div>

                            <div className="sidebar__inner-bottom">
                                <ul className="sidebar-bottom-inner__list">
                                    <li className="sidebar-bottom-inner__item">
                                        <CiCalendar /><p className="sidebar-bottom-inner__p">{currentDate.day} {currentDate.date}, {currentDate.months} {currentDate.year}</p>
                                    </li>
                                    <li className="sidebar-bottom-inner__item">
                                        <CiLocationOn /><p className="sidebar-bottom-inner__p-2">{currentWeather?.name}, {currentWeather?.sys.country}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-bottom">
                <div className="container-bottom">
                    <div className="sidebar-bottom__inner">
                        <h2 className="sidebar-bottom__title">5 Days Forecast</h2>
                        <ul className="sidebar-bottom__list">
                           <SidebarItems data={forecast?.list[7]} />
                           <SidebarItems data={forecast?.list[15]} />
                           <SidebarItems data={forecast?.list[22]} />
                           <SidebarItems data={forecast?.list[29]} />
                           <SidebarItems data={forecast?.list[36]} />
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

