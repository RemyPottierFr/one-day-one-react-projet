import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faTint,
  faWind,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";

function WeatherDetails({ day }) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div className="w-full flex flex-col items-center my-4">
      {day.weather[0].main === "Clouds" && (
        <FontAwesomeIcon
          className="transform scale-150 text-6xl text-gray-500"
          icon={faCloud}
        />
      )}
      {day.weather[0].main === "Clear" && (
        <FontAwesomeIcon
          className="transform scale-150 text-6xl text-yellow-500"
          icon={faSun}
        />
      )}
      {day.weather[0].main === "Rain" && (
        <FontAwesomeIcon
          className="text-6xl text-gray-500"
          icon={faCloudRain}
        />
      )}
      <p className="mt-8 text-xl text-blue-500">
        {new Date(day.dt * 1000).getDate()}{" "}
        {days[new Date(day.dt * 1000).getDay()]}
      </p>
      <div className="grid grid-cols-2 col-gap-2 row-gap-2 w-10/12 my-4">
        <span className="text-blue-500 font-semibold text-lg">Max.</span>
        <span className="text-blue-500 font-semibold text-lg">Min</span>
        <span className="text-blue-500 font-semibold text-xl">
          {Math.round(day.temp.max)}
          °C
        </span>
        <span className="text-blue-500 font-semibold text-xl">
          {Math.round(day.temp.min)}
          °C
        </span>
      </div>
      <div className="grid grid-cols-3 w-10/12">
        <div className="text-blue-500 text-xl flex flex-col items-center">
          <span className="mr-2">
            <FontAwesomeIcon icon={faTint} />
          </span>
          <span>{day.humidity}%</span>
        </div>
        <div className="text-blue-500 text-xl flex flex-col items-center">
          <span className="mr-2">
            <FontAwesomeIcon icon={faWind} />
          </span>
          <span>
            {day.wind_deg}
            °C
          </span>
        </div>
        <div className="text-blue-500 text-xl flex flex-col items-center">
          <span className="mr-2">
            <FontAwesomeIcon icon={faTachometerAlt} />
          </span>
          <span>
            {day.wind_speed}
            km/h
          </span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDetails;
