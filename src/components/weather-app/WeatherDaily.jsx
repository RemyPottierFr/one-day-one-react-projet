import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faSun,
  faCloudRain,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import WeatherDetails from "./WeatherDetails";

function WeatherDaily() {
  const { weatherApp } = useSelector((state) => state);
  const [selected, setSelected] = useState(0);
  const [page, setPage] = useState("resume");

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
      {page === "resume" && (
        <>
          <p className="text-blue-700 tetx-2xl my-4 text-center">
            Forecast for 7 days
          </p>
          <div className="grid grid-cols-1 row-gap-4 my-4 overflow-x-scroll">
            {weatherApp[0].weather.daily.map((day, index) => {
              return (
                <div
                  className="grid grid-cols-4 col-gap-2 px-4 py-2 rounded shadow-lg hover:shadow-inner-lg"
                  key={day.dt}
                  onClick={() => {
                    setPage("details");
                    setSelected(index);
                  }}
                >
                  <div className="flex flex-row items-center col-span-2">
                    {day.weather[0].main === "Clouds" && (
                      <FontAwesomeIcon
                        className="text-3xl text-gray-500"
                        icon={faCloud}
                      />
                    )}
                    {day.weather[0].main === "Clear" && (
                      <FontAwesomeIcon
                        className="text-4xl text-yellow-500"
                        icon={faSun}
                      />
                    )}
                    {day.weather[0].main === "Rain" && (
                      <FontAwesomeIcon
                        className="text-4xl text-gray-500"
                        icon={faCloudRain}
                      />
                    )}
                    <span className="text-blue-500 ml-2 text-lg">
                      {new Date(day.dt * 1000).getDate()}{" "}
                      {days[new Date(day.dt * 1000).getDay()]}
                    </span>
                  </div>
                  <span className="text-blue-700 text-lg">
                    {Math.round(day.temp.max)}
                    °C
                  </span>
                  <span className="text-blue-700 text-lg">
                    {Math.round(day.temp.min)}
                    °C
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
      {page === "details" && (
        <div className="flex flex-col items-start py-4 px-2">
          <button
            className="text-blue-500 text-xl"
            onClick={() => {
              setPage("resume");
              setSelected(0);
            }}
          >
            <FontAwesomeIcon icon={faAngleLeft} /> Retour
          </button>
          <WeatherDetails day={weatherApp[0].weather.daily[selected]} />
        </div>
      )}
    </div>
  );
}

export default WeatherDaily;
