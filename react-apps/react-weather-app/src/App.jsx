import { useState } from 'react'

import './App.css'
import SearchBar from './components/SearchBar';
import { getCurrentWeather } from './services/WeatherAPI';

function App() {

  const [data, setData] = useState(null);

  async function onSearch(city) {
    try {
      const res = await getCurrentWeather(city);
      setData(res);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <SearchBar 
        onSearch={(onSearch)}
      />
      {!data ? <h1>No Results</h1> : <h1>{data.name}</h1>}
    </>
  )
}

export default App
