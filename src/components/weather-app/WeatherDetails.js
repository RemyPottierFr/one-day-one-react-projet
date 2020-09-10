import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";

function WeatherDetails({ day }) {
  return (
    <div className="w-full flex flex-col">
      {day.weather[0].main === "Clouds" && (
        <FontAwesomeIcon icon={faCloud} className="text-3xl text-gray-500" />
      )}
      {day.weather[0].main === "Clear" && (
        <FontAwesomeIcon icon={faSun} className="text-4xl text-yellow-500" />
      )}
      {day.weather[0].main === "Rain" && (
        <FontAwesomeIcon
          icon={faCloudRain}
          className="text-4xl text-gray-500"
        />
      )}
      <div>
        <span className="text-blue-500 font-semibold text-2xl">
          {day.temp.max}
        </span>
        <span className="text-blue-500 font-semibold text-2xl">
          {day.temp.min}
        </span>
      </div>
    </div>
  );
}

export default WeatherDetails;
