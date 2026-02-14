import { describe, it, expect } from 'vitest';
import { WeatherSchema } from './schema.js';

describe('Weather Schema', () => {
  it('should validate correct weather data', () => {
    const validData = {
      name: "London",
      main: { temp: 15, humidity: 80 },
      weather: [{ description: "rainy" }]
    };
    expect(WeatherSchema.safeParse(validData).success).toBe(true);
  });

  it('should reject invalid data (missing temperature)', () => {
    const invalidData = { name: "London", main: { humidity: 80 } };
    expect(WeatherSchema.safeParse(invalidData).success).toBe(false);
  });
});