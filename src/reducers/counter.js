const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INPUTSTEP":
      return state + action.payload.step;
    default:
      return state;
  }
};

export default counterReducer;
