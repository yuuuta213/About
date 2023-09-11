import React from 'react';
import ThermostatOutlinedIcon from '@mui/icons-material/ThermostatOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import iconUrl from '../services/Weatherservice';

const Temperature = ({
  weather: details,
  icon,
  temp,
  temp_min,
  temp_max,
  sunrise,
  sunset,
  humidity,
  feels_like,
  speed,
  timezone,
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <img src={iconUrl(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}゜`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <ThermostatOutlinedIcon className="mr-1" />
            Real fell:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}゜`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <WaterDropOutlinedIcon className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <AirOutlinedIcon className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()}km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <WbSunnyRoundedIcon />
        <p className="font-light">
          Rise:
          <span className="font-medium ml-1">22:13 PM</span>
        </p>
        <p className="font-light">|</p>
        <WbTwilightRoundedIcon />
        <p className="font-light">
          Set:
          <span className="font-medium ml-1">22:13 PM</span>
        </p>
        <p className="font-light">|</p>
        <ArrowUpwardOutlinedIcon />
        <p className="font-light">
          Hign:
          <span className="font-medium ml-1">32゜ </span>
        </p>
        <p className="font-light">|</p>
        <ArrowDownwardOutlinedIcon />
        <p className="font-light">
          Low:
          <span className="font-medium ml-1">32゜</span>
        </p>
      </div>
    </div>
  );
};

export default Temperature;
