import { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import { getCurrentWeather, getForecast } from './services/WeatherAPI';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';

function App() {
  const [currData, setCurrData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  async function onSearch(city) {
    try {
      setLoading(true);
      setSearched(true);

      const resCurr = await getCurrentWeather(city);
      const resForecast = await getForecast(city);

      setCurrData(resCurr);
      setForecastData(resForecast);

    } catch (err) {
      console.error(err);
      setCurrData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app-container">
      
      <SearchBar onSearch={onSearch} />

      {loading && <h1 className="status">Loading...</h1>}

      {!loading && !searched && (
        <h1 className="status">Search for a city 🌍</h1>
      )}

      {!loading && searched && !currData && (
        <h1 className="status">City not found ❌</h1>
      )}

      {!loading && currData && (
        <div className="weather-wrapper">
          <WeatherCard data={currData} />
          <Forecast data={forecastData} />
        </div>
      )}

    </div>
  );
}

export default App;