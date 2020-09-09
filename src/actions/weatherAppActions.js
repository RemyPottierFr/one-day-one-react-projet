import axios from "axios";

export const oneCallApi = ({ lat, lng, name }) => async (dispatch) => {
  const { data } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&appid=4e0c60f9c7160edd5b6e629e57c29cf4`
  );
  dispatch({
    type: "QUERY_WEATHER_API",
    payload: { lat, lng, name, weather: data },
  });
};

export const searchCity = ({ name }) => async (dispatch) => {
  const { data } = await axios.get(
    `https://geo.api.gouv.fr/communes?nom=${name}&fields=nom,codesPostaux,centre&format=json&geometry=centre`
  );
  dispatch({
    type: "SEARCH_CITY",
    payload: { data },
  });
};
