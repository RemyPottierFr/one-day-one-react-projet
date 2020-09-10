import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faSun, faCloudRain } from "@fortawesome/free-solid-svg-icons";

function WeatherDaily() {
  const { weatherApp } = useSelector((state) => state);

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
    <div className="rounded shadow-lg w-3/5 mx-auto px-4 py-2 my-4">
      <p className="text-blue-700 tetx-2xl my-4 text-center">
        Forecast for 7 days
      </p>
      <div className="grid grid-cols-1 row-gap-4 my-4 overflow-x-scroll">
        {weatherApp[0].weather.daily.map((day) => {
          return (
            <div key={day.dt} className="grid grid-cols-4 col-gap-2 mx-4">
              <div className="flex flex-row items-center col-span-2">
                {day.weather[0].main === "Clouds" && (
                  <FontAwesomeIcon
                    icon={faCloud}
                    className="text-3xl text-gray-500"
                  />
                )}
                {day.weather[0].main === "Clear" && (
                  <FontAwesomeIcon
                    icon={faSun}
                    className="text-4xl text-yellow-500"
                  />
                )}
                {day.weather[0].main === "Rain" && (
                  <FontAwesomeIcon
                    icon={faCloudRain}
                    className="text-4xl text-gray-500"
                  />
                )}
                <span className="text-blue-500 ml-2 text-lg">
                  {days[new Date(day.dt * 1000).getDay()]}
                </span>
              </div>
              <span className="text-blue-700 text-lg">
                {Math.round(day.temp.max)}°C
              </span>
              <span className="text-blue-700 text-lg">
                {Math.round(day.temp.min)}°C
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WeatherDaily;
