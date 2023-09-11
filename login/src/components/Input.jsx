import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Input = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize"
          placeholder="検索したい地域名"
        />
        <SearchOutlinedIcon
          fontSize="large"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <LocationOnOutlinedIcon
          fontSize="large"
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl  text-white font-medium">
          ゜C
        </button>
        <p className="text-xl text-white mx-1"></p>
        <button name="imperial" className="text-xl text-white font-medium">
          ゜F
        </button>
      </div>
    </div>
  );
};

export default Input;
