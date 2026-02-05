import { useMemo } from "react";
import {getIconUrl} from "../services/WeatherAPI";

export default function Forecast({ data }) {

  const dailyForecast = useMemo(() => {
    if (!data?.list) return [];

    return data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    );
  }, [data]);

  return (
    <div className="forecast-container">
      {dailyForecast.map((day) => (
        <div key={day.dt} className="forecast-card">
          <h3>
            {new Date(day.dt_txt).toLocaleDateString("en-US", {
              weekday: "short",
            })}
          </h3>

          <img
            src={getIconUrl(day.weather[0].icon)}
            alt=""
          />

          <p>{Math.round(day.main.temp)}°C</p>
        </div>
      ))}
    </div>
  );
}