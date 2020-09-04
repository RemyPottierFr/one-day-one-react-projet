import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter";
import TodoList from "./components/todo-list";
import AjaxList from "./components/ajax-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="flex flex-col justify-center py-16 px-8 font-hairline">
            <h1 className="text-5xl text-blue-500 text-center">
              Welcome to learn-redux project
            </h1>
            <div className="grid grid-cols-4 col-gap-4 row-gap-4 my-8">
              <button
                className="button panel"
                onClick={() => (window.location = "/counter")}
              >
                <span>Counter</span>
              </button>
              <button
                className="button panel"
                onClick={() => (window.location = "/todo")}
              >
                <span>Todo List</span>
              </button>
              <button
                className="button panel"
                onClick={() => (window.location = "/ajax")}
              >
                <span>Ajax</span>
              </button>
            </div>
          </div>
        </Route>
        <Route path="/counter">
          <button
            className="button absolute left-4 top-4"
            onClick={() => (window.location = "/")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </button>
          <Counter />
        </Route>
        <Route path="/todo">
          <button
            className="button absolute left-4 top-4"
            onClick={() => (window.location = "/")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </button>
          <TodoList />
        </Route>
        <Route path="/ajax">
          <button
            className="button absolute left-4 top-4"
            onClick={() => (window.location = "/")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </button>
          <AjaxList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
