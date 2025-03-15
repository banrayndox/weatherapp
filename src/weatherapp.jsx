import SearchBox from "./searchbox"
import InfoBox from "./infobox"
import { useState } from "react";
import './infobox.css';
export default function WeatherApp (){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Dhaka",
        feelslike: 24.99,
        temp: 25.05,
        tempMin: 24.85,
        tempMax: 25.55,
        humidity: 49,
        weather: "haze"
    })
    let updateInfo = (result) =>{
        setWeatherInfo(result);
    }
    return(
        <> <div className="InfoBox">
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} /></div>
        </>
    )
}