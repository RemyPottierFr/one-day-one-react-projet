const errors = (state = [], action) => {
  switch (action.type) {
    case "reset":
      return [];
    case "GEO_DENIED":
      return [
        {
          type: action.type,
          message: "You refuse the geolocalisation.",
        },
      ];
    default:
      return state;
  }
};

export default errors;
