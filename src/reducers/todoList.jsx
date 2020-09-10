const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.map((x) => {
        x.id === action.payload.id && (x.deleted = true);
        return x;
      });
    case "UNDO_DELETE_TODO":
      return state.map((x) => {
        x.id === action.payload.id && (x.deleted = false);
        return x;
      });
    case "TOGGLE_VISIBILITY_TODO":
      return state.map((x) => {
        x.id === action.payload.id && (x.show = !x.show);
        return x;
      });
    case "UPDATE_TODO_MESSAGE":
      console.log("update");
      return state.map((x) => {
        x.id === action.payload.id && (x.message = action.payload.message);
        return x;
      });
    default:
      return state;
  }
};

export default todoList;
