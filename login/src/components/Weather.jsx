import React from 'react';
import { useState, useEffect } from 'react';
import Topbutton from './Topbutton';
import Input from './Input';
import Timelocation from './Timelocation';
import Temperature from './Temperature';
import Forcast from './Forcast';
import getFormattedWeatherData from '../services/Weatherservice';
import getFormattedForecastWeather from '../services/Weatherservice';

const Weather = () => {
  const [query, setquery] = useState({ q: 'tokyo' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
      // const forecastData = await getFormattedForecastWeather({ q: 'tokyo' });
      // console.log(data, forecastData);
    };
    fetchWeather();
  }, [query, units]);

  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl shadow-gray-400">
      <Topbutton />
      <Input />
      {weather && (
        <div>
          <Timelocation weather={weather} />
          <Temperature weather={weather} />
          <Forcast title="houry forecast" />
          <Forcast title="daily forecast" />
        </div>
      )}
    </div>
  );
};

export default Weather;
