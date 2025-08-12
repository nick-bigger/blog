import { OpenWeatherData } from "@/types/OpenWeather";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const LATITUDE = 42.3555; // Latitude for Austin, Texas.
const LONGITUDE = -71.0565; // Longitude for Austin, Texas.

export const fetchWeather = async (): Promise<OpenWeatherData> => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${LATITUDE}&lon=${LONGITUDE}&appid=${API_KEY}&units=imperial`,
  );

  if (!response.ok) {
    console.log("Error fetching weather.");
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
