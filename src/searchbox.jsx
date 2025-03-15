import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
export default function SearchBox({updateInfo}){
let [city, setCity] = useState("");
let [error, setError] = useState(false);

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'ce2670a5cdf16a1dfb212872af081f74'
let getWeatherInfo = async() => {
try{
    let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let JsonResponse = await response.json();

    let result = {
        city: city,
        temp: JsonResponse.main.temp,
        tempMin: JsonResponse.main.temp_min,
        tempMax: JsonResponse.main.temp_max,
        humidity: JsonResponse.main.humidity,
        feelsLike: JsonResponse.main.feels_like,
        weather: JsonResponse.weather[0].description,
       
    }
    return result;
} catch(err){
throw err;
}


}
let handleChange=(event)=>{
    setCity(event.target.value)


}
let handleSubmit= async (evt)=>{
try{
    await    event.preventDefault();
   let newInfo =  await getWeatherInfo();
   updateInfo(newInfo);

setCity("");
}
catch(err){
  setError(true);
}

}
    return(<div className="SearchBox"> <h3>Search for the weather</h3>
    <form onSubmit={handleSubmit}><TextField id="city" label="Enter Your City" variant="outlined" onChange={handleChange} required />
    <br></br>
    <Button variant="contained" color="success" type="submit" >SHOW</Button></form> 
    {error && <p style={{color:"red"}} >No such place exist</p>}
    
    
    
    </div>)
}