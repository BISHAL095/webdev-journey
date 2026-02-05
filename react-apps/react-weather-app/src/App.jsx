import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar';
import { getCurrentWeather } from './services/WeatherAPI';
import WeatherCard from './components/WeatherCard';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  async function onSearch(city) {
  try {
    setLoading(true);
    setSearched(true);

    const res = await getCurrentWeather(city);
    setData(res);

  } catch (err) {
    console.error(err);
    setData(null);
  }finally {
    setLoading(false);
  }
}


  return (
    <>
      <SearchBar 
        onSearch={(onSearch)}
      />
      {loading ? (
        <h1>Loading...</h1>
      ) : !searched ? (
        <h1>Search for a city</h1>
      ) : !data ? (
        <h1>City not found</h1>
      ) : (
        <div>
          <WeatherCard data={data} />
          
        </div>
        
      )}
    </>
  )
}

export default App
