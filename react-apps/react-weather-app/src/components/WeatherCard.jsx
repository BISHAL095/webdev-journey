import {getIconUrl} from "../services/WeatherAPI";

export default function WeatherCard({data}){
    return (
        <div className="Weather-Card">
            <h2>Place: {data.name} , {data.sys.country}</h2>
            <h1>Temperature: {data.main.temp}°C</h1>
            <h3>
                <img src={getIconUrl(data.weather[0].icon)} alt="Weather Icon" />
                {data.weather[0].main}
            </h3>
            <h3>Feels Like: {data.main.feels_like}°C</h3>
            <h3>Min. Temp: {data.main.temp_min}°C , Max. Temp: {data.main.temp_max}°C</h3>
            <h3>Humidity: {data.main.humidity}%</h3>
            <h3>Wind Speed: {data.wind.speed*3.6}km/h</h3>
            <h3>Pressure: {data.main.pressure}hPa</h3>
            <h3>Visibility: {(data.visibility / 1000).toFixed(2)}km</h3>
        </div>
    )
}