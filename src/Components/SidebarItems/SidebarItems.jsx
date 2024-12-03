import React from 'react'
import './SidebarItems.css'

function SidebarItems({ data }) {

    let weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const sidebarItemData = {
        day: (new Date(data?.dt * 1000)).getDay() - 1 !='-1'?  weekdays[(new Date(data?.dt * 1000)).getDay() - 1] : 'Sunday',
        date: (new Date(data?.dt * 1000)).getDate(),
        months: months[(new Date(data?.dt * 1000)).getMonth()],
        deg: data?.main.temp
    }

    

    return (
        <>
            <li className="sidebar-bottom__item">
                <div className="sidebar-bottom__icon">
                    <img className='forceimg' src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`} alt="" />
                </div>
                <p className="sidebar-bottom__temp">{sidebarItemData.deg}&deg;C</p>
                <p className="sidebar-bottom__date">{sidebarItemData.date} {sidebarItemData.months}</p>
                <p className="sidebar-bottom__day">{sidebarItemData.day}</p>
            </li>
        </>
    )
}

export default SidebarItems