import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todoList from "./todoList";
import ajaxList from "./ajax";
import errors from "./error";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoList,
  ajaxList,
  errors,
});

export default reducers;
