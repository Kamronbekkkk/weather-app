import './App.css'
import React, { useEffect, useRef, useState, } from 'react'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Highlights from './Components/Higlights/Highlights'
import axios from 'axios'
import Weather from './Components/Weather/Weather'
import Today from './Components/Today/Today'


export default function App() {

  const inputRef = useRef()

  const API_KEY = '8b4ee71b3670bbf8adbd733000e71105'
  const API = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
  })
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [airQuality, setAirQuality] = useState(null)
  const [location, setLocation] = useState({lon: null, lat: null})
  const [error, setError] = useState(null)


  useEffect(() => {
    API.get(`/weather?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setCurrentWeather(res.data));

    API.get(`/forecast?q=tashkent&appid=${API_KEY}&units=metric`)
      .then((res) => setForecast(res.data));
  }, [inputRef.current?.value])


  useEffect(() => {
    API.get(`/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
    .then((res) => setCurrentWeather(res.data));

  API.get(`/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`)
    .then((res) => setForecast(res.data));

    API.get(`/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`)
        .then((res) => setAirQuality(res.data))
  }, [location])

  const fetchData = () => {
   
      API.get(`/weather?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`)
        .then((res) => setCurrentWeather(res.data));

      API.get(`/forecast?q=${inputRef.current.value}&appid=${API_KEY}&units=metric`)
        .then((res) => setForecast(res.data))
    }

    useEffect(() => {
      API.get(`/air_pollution?lat=${currentWeather?.coord.lat}&lon=${currentWeather?.coord.lon}&appid=${API_KEY}`)
        .then((res) => setAirQuality(res.data))
    }, [currentWeather])

  return (
      <>
        <Header setLocation={setLocation} setError={setError} inputRef={inputRef} fetchData={fetchData} />
        <Sidebar currentWeather={currentWeather} forecast={forecast} />
        <Highlights  currentWeather={currentWeather} airQuality={airQuality} />
        <Weather currentWeather={currentWeather} />
        <Today forecast={forecast} />
      </>
    )
  }


