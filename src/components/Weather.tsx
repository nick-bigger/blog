import { useQuery } from "@tanstack/react-query";
import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Moon,
  Sun,
  Thermometer,
} from "lucide-react";

import { fetchWeather } from "@/services/openWeatherService";
import { OpenWeatherData } from "@/types/OpenWeather";

const getWeatherIcon = (iconCode: string) => {
  switch (iconCode.slice(0, 2)) {
    case "01": // Clear sky.
      return iconCode.includes("d") ? <Sun size={18} /> : <Moon size={18} />;
    case "02": // Few clouds.
    case "03": // Scattered clouds.
    case "04": // Broken clouds, overcast clouds.
      return <Cloud size={18} />;
    case "09": // Shower rain.
    case "10": // Rain.
      return <CloudRain size={18} />;
    case "11": // Thunderstorm.
      return <CloudLightning size={18} />;
    case "13": // Snow.
      return <CloudSnow size={18} />;
    case "50": // Mist, Smoke, Haze, Dust, Fog, Sand, Ash, Squall, Tornado
      return <CloudFog size={18} />;
    default:
      return <Thermometer size={18} />; // Fallback icon
  }
};

export const Weather = () => {
  const {
    data: weather,
    isLoading,
    isError,
  } = useQuery<OpenWeatherData, Error>({
    queryKey: ["weather"],
    queryFn: fetchWeather,
    refetchInterval: 600000, // Refetch every 10 minutes.
  });

  if (isLoading || isError || !weather) {
    return null;
  }

  const description = weather.weather[0].description;
  const temperature = Math.round(weather.main.temp);
  const iconCode = weather.weather[0].icon;

  const formattedDescription = description.split(" ").join(" ");

  const WeatherIcon = getWeatherIcon(iconCode);

  return (
    <div className="flex items-center gap-2 text-foreground">
      {WeatherIcon}
      <span>
        {formattedDescription}, {temperature}°F
      </span>
    </div>
  );
};
