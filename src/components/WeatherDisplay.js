import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../utils/api';

const WeatherDisplay = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        fetchWeather('Kolkata').then(data => setWeather(data));
    }, []);

    return (
        <div>
            {weather ? (
                <p>Weather: {weather.weather[0].description} - {weather.main.temp}°C</p>
            ) : (
                <p>Loading Weather...</p>
            )}
        </div>
    );
};

export default WeatherDisplay;
