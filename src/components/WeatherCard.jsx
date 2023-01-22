import React, { useEffect, useState } from 'react';
import axios from 'axios';



const WeatherCard = ({ lat, lon }) => {

  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [change, setChange] = useState(true)


  useEffect(() => {

    if (lat) {
      const APIKey = '128abc17b48ad4448e3a110bc09884a6'
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

      axios.get(URL)
        .then(res => {
          setWeather(res.data)
          const temp = {
            fahrenheit: `${Math.round((res.data.main.temp - 273.15) * 9 / 5 + 32)} °F`,
            celsius: `${Math.round(res.data.main.temp - 273.15)} °C`
          }
          setTemperature(temp)
        })
        .catch(err => console.log(err))

    }
  }, [lat, lon])

  const handdleChange = () => setChange(!change)

  console.log(weather)
  return (
    <div className='card_container'>
      <div className='card'>
      <h1>Weather App</h1>
      <div className='wth__img'>
        <img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
        <h3>
          {change ? temperature?.celsius : temperature?.fahrenheit}
        </h3>
        
      </div>
      <div className='properties'>
        <h2>{weather?.weather[0].description}</h2>
        <ul>
          
          <li>wind Speed: {weather?.wind.speed} m/s</li>
          <li>clouds: {weather?.clouds.all} %</li>
          <li>pressure: {weather?.main.pressure} hPa</li>
          </ul>
          < button className='tempbtn' onClick={handdleChange}> {change ? " Change to Fº": "Change to Cº"}</button>
      </div>
      
      </div>
    </div>
  );
};

export default WeatherCard;
