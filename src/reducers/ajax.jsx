const ajax = (state = [], action) => {
  switch (action.type) {
    case "QUERY_ALL_CHARACTERS":
      return action.payload.characters;
    case "QUERY_CHARACTERS_WITH_ID":
      return [action.payload.character];
    default:
      return state;
  }
};

export default ajax;
