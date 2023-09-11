import React from 'react';

const Forcast = ({ title }) => {
  return (
    <div>
      <div className="flex items-center justify-start mt-6 ">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className=" my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">03:30 PM</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className=" w-12 my-1"
          />
          <p className="font-medium">32゜</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">03:30 PM</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className=" w-12 my-1"
          />
          <p className="font-medium">32゜</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">03:30 PM</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className=" w-12 my-1"
          />
          <p className="font-medium">32゜</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">03:30 PM</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className=" w-12 my-1"
          />
          <p className="font-medium">32゜</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className=" font-light text-sm">03:30 PM</p>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className=" w-12 my-1"
          />
          <p className="font-medium">32゜</p>
        </div>
      </div>
    </div>
  );
};

export default Forcast;
