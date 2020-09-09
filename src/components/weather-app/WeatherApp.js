import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { weatherAppActions, errorActions } from "../../actions";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCloud } from "@fortawesome/free-solid-svg-icons";

function WeatherApp() {
  const dispatch = useDispatch();
  const { errors, weatherApp } = useSelector((state) => state);
  const [coords, setCoords] = useState({
    lat: 48.8534,
    lng: 2.3488,
    name: "Paris",
  });
  let [localized, setLocalized] = useState(false);

  useEffect(() => {
    !localized &&
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { data } = await axios.get(
            `https://geo.api.gouv.fr/communes?lat=${position.coords.latitude}&lon=${position.coords.longitude}&fields=nom,codesPostaux,centre&format=json&geometry=centre`
          );
          setCoords({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            name: data[0].nom,
          });
          setLocalized(true);
        },
        (error) => {
          dispatch(errorActions.create("GEO_DENIED"));
        }
      );
    !localized && dispatch(weatherAppActions.oneCallApi(coords));
  }, [dispatch, coords, localized]);

  return (
    <section className="w-full md:w-10/12 lg:8/12 mx-auto mt-24 py-16">
      <h1 className="text-3xl text-blue-500 font-hairline text-center">
        Welcome on Rick Weather App !
      </h1>
      {weatherApp.length > 0 ? (
        <div className="text-center">
          <div className="float my-8">
            {weatherApp[0].weather.current.weather[0].main === "Clouds" && (
              <FontAwesomeIcon
                icon={faCloud}
                className="transform scale-150 text-6xl text-gray-500"
                ideographic="wsh"
              />
            )}
          </div>
          <h3 className="text-blue-500 font-semibold text-2xl">
            {weatherApp[0].name}
          </h3>
          <span className="font-hairline text-blue-500 my-4">
            Today it's {weatherApp[0].weather.current.weather[0].main}
          </span>
        </div>
      ) : (
        <div>No data</div>
      )}
      {errors.map((error) => {
        setTimeout(() => {
          dispatch(errorActions.reset());
        }, 3000);
        return (
          <div
            key={error}
            className="z-10 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded text-xl text-blue-500 px-4 py-2"
          >
            {error.message}
            <button
              className="text-red-500 text-xl ml-2"
              onClick={() => dispatch(errorActions.reset())}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default WeatherApp;
