import { useState, useEffect } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()

    useEffect(() => {
      const success = pos => { 
        const latlong ={
          lat:pos.coords.latitude,
          lon:pos.coords.longitude
        }
      setCoords(latlong)
      
     } 
     navigator.geolocation.getCurrentPosition(success)
    }, [])
   
    
  return (
    <div>
      <WeatherCard lat={coords?.lat} lon={coords?.lon}/>
      <footer>Mariano Echavarria <br /> Academlo 2023</footer>
    </div>
    
  )
}

export default App
