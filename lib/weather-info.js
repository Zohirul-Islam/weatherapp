export const getWeatherData = async(lat,lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`);
        const data = await response.json();
        return data?.weather[0];
    } catch (error) {
        console.error(error.message)
    }
}
export const getTemparatureData = async(lat,lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`);
        const data = await response.json();
        return data?.main;
    } catch (error) {
        console.error(error.message)
    }
}
export const getWindData = async(lat,lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`);
        const data = await response.json();
        return data?.wind;
    } catch (error) {
        console.error(error.message)
    }
}
export async function getAQIData(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
  );

  if (!res.ok) {
    console.error("API fetch failed:", res.statusText);
    return null; // ✅ return null instead of undefined
  }

  const data = await res.json();
  console.log("AQI data:", data);

  // Check structure
  if (!data.list || !data.list.length) {
    console.error("Invalid API data:", data);
    return null;
  }

  return data.list[0]; // ✅ This should contain main and components
}
