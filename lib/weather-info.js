export const getWeatherData = async(lat,lon) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_KEY}&units=metric`);
        const data = await response.json();
        console.log(data.weather[0]);
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
try {
const response = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}`
    );
    const data = await response.json();
    return data?.list[0]
} catch (error) {
    
}


}
