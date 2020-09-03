import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todoList from "./todoList";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoList,
});

export default reducers;
