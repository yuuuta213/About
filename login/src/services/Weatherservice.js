import { DateTime } from 'luxon';

const API_KEY = '7097d0b51e18917f4a76a262ec437b09';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

// https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=7097d0b51e18917f4a76a262ec437b09

//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//https://api.openweathermap.org/data/2.5/forecast?lon=134.9445&lat=34.6788&appid=7097d0b51e18917f4a76a262ec437b09

//URLの作成　Jsonの受け取り
const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  // console.log(url);
  return fetch(url).then((res) => res.json());
  // .then((data) => data);
};

//Jsonデータの整形フォーマット　２．５Weather
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise,
    sunset,
    dt,
    weather,
    speed,
    details,
    icon,
  };
};

////Jsonデータの整形フォーマット　２．５forecast
const formatForecastWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp },
    city: { timezone },
    dt,
    weather,
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    timezone,
    dt,
    weather,
    details,
    icon,
  };
};

//出力データ　非同期でURLにアクセスし、整形したフォーマットのJsonの取得
const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    'weather',
    searchParams
  ).then(formatCurrentWeather);
  return formattedCurrentWeather;
};

// const { lat, lon } = formattedCurrentWeather;
const getFormattedForecastWeather = async (searchParams) => {
  const formattedForecastCurrentWeather = await getWeatherData(
    'forecast',
    searchParams
  ).then(formatForecastWeather);
  return formattedForecastCurrentWeather;
};

//Luxonをつかって時間の整形
const localTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time:'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;
export { iconUrl, localTime, getFormattedForecastWeather };
