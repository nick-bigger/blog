export interface OpenWeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  name: string;
  wind: {
    speed: number;
  };
}
