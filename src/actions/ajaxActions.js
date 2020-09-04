import axios from "axios";

export const queryAllCharacters = () => async (dispatch) => {
  const res = await axios.get("https://rickandmortyapi.com/api/character/");
  dispatch({
    type: "QUERY_ALL_CHARACTERS",
    payload: { characters: res.data.results },
  });
};

export const queryCharacterWithId = (id) => async (dispatch) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  dispatch({
    type: "QUERY_CHARACTERS_WITH_ID",
    payload: { character: res.data },
  });
};
export const queryRandomCharacter = () => async (dispatch) => {
  const id = Math.floor(Math.random() * 671) + 1;
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  dispatch({
    type: "QUERY_CHARACTERS_WITH_ID",
    payload: { character: res.data },
  });
};
