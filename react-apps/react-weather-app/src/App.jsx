import { useState } from 'react'

import './App.css'

function App() {
  const key="5d92c58abcc38c1871351807773eeda5";
  const [city,setCity]=useState("durgapur");
  const [data,setData]=useState({});
  // async function get(key,city){
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
  //   );
  //   const result = await response.json();
  //   setData(result);
  //   console.log(result);
  // }
  async function get5(key,city) {
    const response= await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric`
    );
    const result = await response.json();
    setData(result);
    console.log(result);
  }
  return (
    <>
      <input 
        type="text" 
        name="city"
        value={city}
        onChange={(e)=> setCity(e.target.value)}
      />
      <p>{data.name}</p>
      <button onClick={()=>get5(key,city)}></button>
    </>
  )
}

export default App
