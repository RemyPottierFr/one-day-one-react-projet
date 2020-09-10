const rickMarketCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload.id);
    case "CHANGE_QTE":
      return state.map((item) => {
        item.id === action.payload.id &&
          (item.quantity = action.payload.quantity);
        return item;
      });
    default:
      return state;
  }
};

export default rickMarketCart;
