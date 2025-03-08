import axios from 'axios';

const API_BASE = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather:', error);
        return null;
    }
};
