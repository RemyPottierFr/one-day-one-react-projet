import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter";
import TodoList from "./components/todo-list";
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
            <div className="flex justify-evenly my-8">
              <button
                className="button font-hairline"
                onClick={() => (window.location = "/counter")}
              >
                Counter
              </button>
              <button
                className="button font-hairline"
                onClick={() => (window.location = "/todo")}
              >
                Todo List
              </button>
            </div>
          </div>
        </Route>
        <Route path="/counter">
          <button
            className="text-xl text-blue-500 absolute ml-4 mt-4"
            onClick={() => (window.location = "/")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </button>
          <Counter />
        </Route>
        <Route path="/todo">
          <button
            className="text-xl text-blue-500 absolute ml-4 mt-4"
            onClick={() => (window.location = "/")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </button>
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
