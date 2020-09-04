import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todoList from "./todoList";
import ajaxList from "./ajax";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoList,
  ajaxList,
});

export default reducers;
