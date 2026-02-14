import { z } from 'zod';

// Define the schema of the external API we don't control
export const WeatherSchema = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    humidity: z.number(),
  }),
  weather: z.array(z.object({
    description: z.string()
  }))
});

// Infer the TypeScript type from the schema
export type WeatherData = z.infer<typeof WeatherSchema>;