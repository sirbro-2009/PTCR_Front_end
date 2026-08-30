import { Label } from "@/components/ui/label";
import { editZero } from "./prayer_time_box";
import { 
  Sun, Moon, CloudSun, CloudMoon, Cloud, CloudFog, 
  CloudDrizzle, CloudRain, CloudRainWind, Snowflake, CloudSnow, CloudLightning 
} from "lucide-react";
function getTempColor(temp:number) {
  if (temp < 0)   return "text-blue-300"
  if (temp < 10)  return "text-blue-500"
  if (temp < 25)  return "text-green-500"
  if (temp < 35)  return "text-yellow-500"
  if (temp < 40)  return "text-orange-500"
  return "text-red-600"
}
const weatherIcons = {
  0: "Clear day",
  1: "Partly cloudy-day",
  2: "Cloudy",
  3: "Overcast",
  61: "Rain",
  71: "Snow",
  80: "Thunderstorms rain",
} as const;


export function getWeatherIcon(weathercode: number, is_day: boolean) {
  switch (weathercode) {
    case 0: // Clear sky
      return is_day ? Sun : Moon;
    case 1: // Mainly clear
      return is_day ? CloudSun : CloudMoon;
    case 2: // Partly cloudy
      return is_day ? CloudSun : CloudMoon;
    case 3: // Overcast
      return Cloud;
    case 45: // Fog
    case 48: // Depositing rime fog
      return CloudFog;
    case 51: // Drizzle: Light
    case 53: // Drizzle: Moderate
    case 55: // Drizzle: Dense
    case 56: // Freezing Drizzle: Light
    case 57: // Freezing Drizzle: Dense
      return CloudDrizzle;
    case 61: // Rain: Slight
    case 63: // Rain: Moderate
    case 65: // Rain: Heavy
    case 66: // Freezing Rain: Light
    case 67: // Freezing Rain: Heavy
      return CloudRain;
    case 71: // Snow fall: Slight
    case 73: // Snow fall: Moderate
    case 75: // Snow fall: Heavy
    case 77: // Snow grains
      return Snowflake;
    case 80: // Rain showers: Slight
    case 81: // Rain showers: Moderate
    case 82: // Rain showers: Violent
      return CloudRainWind;
    case 85: // Snow showers: Slight
    case 86: // Snow showers: Heavy
      return CloudSnow;
    case 95: // Thunderstorm: Slight or moderate
    case 96: // Thunderstorm with slight hail
    case 99: // Thunderstorm with heavy hail
      return CloudLightning;
    default:
      return Cloud;
  }
}
export default function Whether_data({
  is_day,
  weathercode,
  temperature,
}: {
  is_day: number;
  weathercode: number;
  temperature: number;
}) {
const color = getTempColor(temperature)
const WeatherIcon = getWeatherIcon(weathercode,is_day === 1)
  return (
    <Label dir="ltr" className="items-center">
      <span className={`text-xl ${color}`}>{editZero(parseInt(temperature.toString()).toString())}°C</span>
      <WeatherIcon size={45} />
    </Label>
  );
}
