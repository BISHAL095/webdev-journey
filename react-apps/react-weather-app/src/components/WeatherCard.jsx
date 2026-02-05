import {getIconUrl} from "../services/WeatherAPI";

export default function WeatherCard({data}){
    return (
    <div className="Weather-Card">

        <h2>{data.name}, {data.sys.country}</h2>

        <img
            src={getIconUrl(data.weather[0].icon)}
            alt="Weather Icon"
        />

        <h1>{Math.round(data.main.temp)}°C</h1>

        <p className="weather-main">
            {data.weather[0].main}
        </p>
  <div className="weather-info">
        <div>
            Feels: {Math.round(data.main.feels_like)}°C
        </div>

        <div>
        H: {Math.round(data.main.temp_max)}°  
        L: {Math.round(data.main.temp_min)}°
        </div>

        <div>Humidity: {data.main.humidity}%</div>

        <div>
        Wind: {Math.round(data.wind.speed * 3.6)} km/h
        </div>

        <div>
            Pressure: {data.main.pressure} hPa
        </div>

        <div>
        Visibility: {(data.visibility / 1000).toFixed(1)} km
        </div>
  </div>

</div>
    )
}