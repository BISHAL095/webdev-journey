const BASE_URL = "https://api.openweathermap.org/data/2.5";
const KEY ="5d92c58abcc38c1871351807773eeda5"; //import.meta.env.VITE_WEATHER_API_KEY; 

// For current weather
export async function getCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}

// For 5days forecast
export async function getForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error("City not found");
  }

  return response.json();
}