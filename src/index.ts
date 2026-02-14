import axios from 'axios';
import { WeatherSchema, WeatherData } from './schema.js';

async function getLocalWeather(city: string): Promise<WeatherData | null> {
  try {
    // 1. Fetch data
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY_OR_MOCK`;
    
    // For this demo, let's pretend we called an API and got this JSON back:
    const mockResponse = {
      name: city,
      main: { temp: 22.5, humidity: 45 },
      weather: [{ description: "clear sky" }]
    };

    // 2. Validate data at the "Border" (Security best practice)
    const result = WeatherSchema.safeParse(mockResponse);

    if (!result.success) {
      console.error("Invalid API response:", result.error.format());
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}

const data = await getLocalWeather("Lisbon");
console.log(`Current weather in ${data?.name}: ${data?.main.temp}°C`);