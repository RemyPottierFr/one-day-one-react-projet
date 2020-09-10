const weatherApp = (state = [], actions) => {
  switch (actions.type) {
    case "QUERY_WEATHER_API":
      return [{ ...actions.payload }];
    default:
      return state;
  }
};

export default weatherApp;
