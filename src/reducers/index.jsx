import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todoList from "./todoList";
import ajaxList from "./ajax";
import errors from "./error";
import rickMarketCart from "./rick-market-cart";
import weatherApp from "./weatherApp";
import { combineReducers } from "redux";

const reducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  todoList,
  ajaxList,
  errors,
  rickMarketCart,
  weatherApp,
});

export default reducers;
