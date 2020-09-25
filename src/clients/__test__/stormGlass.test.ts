import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json'; 
import stormGlassNormalized3HoursFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass Client', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    it('should return the normalized forecast from the StormGlass service', async () => {
        const lat = -43.9011;
        const lng = 153.9129;

        mockedAxios.get.mockResolvedValue({data: stormGlassWeather3HoursFixture});

        const stormGlass = new StormGlass(mockedAxios);
        const response = await stormGlass.fetchPoints(lat, lng);

        expect(response).toEqual(stormGlassNormalized3HoursFixture);
    })
})