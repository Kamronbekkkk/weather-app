import React from 'react'
import { useRef } from 'react';
import './Header.css'
import { IoMdSearch } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";

export default function Header({inputRef, fetchData, setLocation, setError}) {


    const getCurrentLocation =() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            const {longitude, latitude} = position.coords
            console.log(longitude, latitude)
            setLocation({
                lon: longitude,
                lat: latitude,
            })
        },
        (err)=>{
            setError('Not allowed to current location')
        }
        
    )
    }

    const handelChange = () => {
        console.log(inputRef.current.value)
    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <h1 className='header-title'>Weather</h1>
                        <ul className='header-list'>
                            <li className='header-item'>
                                <input ref={inputRef} onChange={handelChange} className='header-input' type="text" placeholder='Enter city name' />
                            </li>
                            <li className='header-item'>
                                <button onClick={()=> fetchData()} className='header-button'><IoMdSearch /> Search</button>
                            </li>
                            <li onClick={getCurrentLocation} className='header-item'>
                                <button className='header-button-2'><MdMyLocation /> Curent Location</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

