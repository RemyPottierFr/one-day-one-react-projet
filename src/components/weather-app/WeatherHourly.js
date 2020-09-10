import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun } from "@fortawesome/free-solid-svg-icons";

function WeatherHourly() {
  const { weatherApp } = useSelector((state) => state);

  return (
    <div className="rounded shadow-lg w-3/5 mx-auto px-4 py-2 my-4">
      <p className="text-blue-700 tetx-2xl my-4 text-center">
        Forecast for 48h
      </p>
      <div className="flex flex-row my-4 overflow-x-scroll">
        {weatherApp[0].weather.hourly.map((hour) => {
          return (
            <div
              key={hour.dt}
              className="flex flex-col items-center justify-center mx-4"
            >
              {hour.weather[0].description === "few clouds" && (
                <FontAwesomeIcon
                  icon={faCloud}
                  className="text-4xl text-gray-500"
                />
              )}
              {hour.weather[0].description === "clear sky" && (
                <FontAwesomeIcon
                  icon={faSun}
                  className="text-4xl text-yellow-500"
                />
              )}
              <span className="text-blue-500">
                {new Date(hour.dt * 1000).getHours()}h
              </span>
              <span className="text-blue-700 text-lg">
                {Math.round(hour.temp)}°C
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherHourly;
