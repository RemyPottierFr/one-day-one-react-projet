import React, { useState, useEffect } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMap } from "@fortawesome/free-solid-svg-icons";

function Altermap() {
  const dispatch = useDispatch();
  const { errors } = useSelector((state) => state);

  let [parameters, setParams] = useState({
    lat: 48.8534,
    lng: 2.3488,
    zoom: 10,
    tileMap: "{s}.tile.openstreetmap.org",
  });

  let position = [parameters.lat, parameters.lng];

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setParams((state) => ({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom: state.zoom,
        }));
      },
      () => {
        dispatch(errorActions.create("GEO_DENIED"));
      }
    );
  }, [dispatch]);

  return (
    <div className="w-screen h-screen relative z-0">
      <Map
        center={position}
        className="w-screen h-full z-0"
        zoom={parameters.zoom}
        zoomControl={false}
      >
        <TileLayer
          url={`https://${
            parameters.tileMap
              ? parameters.tileMap
              : "{s}.tile.openstreetmap.org"
          }/{z}/{x}/{y}.png`}
        />
        <ZoomControl position="topright" />
      </Map>
      <section className="z-1 w-full p-4 absolute bottom-0 left-0 bg-white overflow-x-scroll flex flex-row items-center">
        <span className="text-lg text-blue-500 flex items-center flex-row">
          Maps <FontAwesomeIcon className="mx-2 text-green-600" icon={faMap} />
        </span>
        <div className="h-6 w-0 border-black border mx-2" />
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "{s}.tile.openstreetmap.org",
            }))
          }
        >
          Default
        </button>
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "a.tile.openstreetmap.de",
            }))
          }
        >
          Roads
        </button>
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "maps.wikimedia.org/osm-intl",
            }))
          }
        >
          WikiMedia
        </button>
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "tiles.wmflabs.org/hikebike",
            }))
          }
        >
          Bike roads
        </button>
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "tiles.wmflabs.org/bw-mapnik",
            }))
          }
        >
          Grayscale
        </button>
        <button
          className="button whitespace-no-wrap"
          onClick={() =>
            setParams((state) => ({
              ...state,
              tileMap: "tiles.wmflabs.org/osm-no-labels",
            }))
          }
        >
          No labels
        </button>
      </section>
      {errors.map((error) => {
        setTimeout(() => {
          dispatch(errorActions.reset());
        }, 3000);
        return (
          <div
            className="z-10 absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-75 rounded text-xl text-blue-500 px-4 py-2"
            key={error}
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
    </div>
  );
}

export default Altermap;
