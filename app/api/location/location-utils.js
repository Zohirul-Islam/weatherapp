const data = [
  {
    "continent": "Asia",
    "city": "Dhaka",
    "country": "Bangladesh",
    "latitude": 23.8103,
    "longitude": 90.4125
  },
  {
    "continent": "Asia",
    "city": "Tokyo",
    "country": "Japan",
    "latitude": 35.6895,
    "longitude": 139.6917
  },
  {
    "continent": "Asia",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "latitude": 25.2769,
    "longitude": 55.2963
  },
  {
    "continent": "Europe",
    "city": "London",
    "country": "United Kingdom",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  {
    "continent": "Europe",
    "city": "Paris",
    "country": "France",
    "latitude": 48.8566,
    "longitude": 2.3522
  },
  {
    "continent": "Europe",
    "city": "Berlin",
    "country": "Germany",
    "latitude": 52.52,
    "longitude": 13.405
  },
  {
    "continent": "North America",
    "city": "New York City",
    "country": "United States",
    "latitude": 40.7128,
    "longitude": -74.006
  },
  {
    "continent": "North America",
    "city": "Toronto",
    "country": "Canada",
    "latitude": 43.6511,
    "longitude": -79.3839
  },
  {
    "continent": "South America",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "latitude": -22.9068,
    "longitude": -43.1729
  },
  {
    "continent": "Africa",
    "city": "Cairo",
    "country": "Egypt",
    "latitude": 30.0444,
    "longitude": 31.2357
  },
  {
    "continent": "Africa",
    "city": "Nairobi",
    "country": "Kenya",
    "latitude": -1.2921,
    "longitude": 36.8219
  },
  {
    "continent": "Oceania",
    "city": "Sydney",
    "country": "Australia",
    "latitude": -33.8688,
    "longitude": 151.2093
  },
  {
    "continent": "Oceania",
    "city": "Auckland",
    "country": "New Zealand",
    "latitude": -36.8485,
    "longitude": 174.7633
  }
]
function getLocation() {
    return data
}
function getLocationByCityName(city){
    if (!city) return null
    const foundCity = data.find((item) => item.city.toLowerCase() === city.toLowerCase());
    return foundCity || {}
}
export {getLocation,getLocationByCityName}