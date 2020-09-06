import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter";
import TodoList from "./components/todo-list";
import AjaxList from "./components/ajax-list";
import Altermap from "./components/altermap";
import RickMarket, {
  RickMarketCart,
  RickMarketHeader,
  RickMarketFooter,
} from "./components/rick-market";
import UnknownRoute from "./components/unknown-route";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "./components/shared";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="flex flex-col justify-center py-16 px-8 font-hairline">
            <h1 className="text-5xl text-blue-500 text-center">
              Welcome to learn-redux project
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 col-gap-2 row-gap-4 my-8">
              <LinkButton to="/counter" className="panel">
                <span>Counter</span>
              </LinkButton>
              <LinkButton to="/todo" className="panel">
                <span>Todo List</span>
              </LinkButton>
              <LinkButton to="/ajax" className="panel">
                <span>Ajax</span>
              </LinkButton>
              <LinkButton to="/altermap" className="panel">
                <span>Altermap</span>
              </LinkButton>
              <LinkButton to="/unknown" className="panel">
                <span>?</span>
              </LinkButton>
              <LinkButton to="/rick-market" className="panel">
                <span>Rick Market</span>
              </LinkButton>
            </div>
          </div>
        </Route>
        <Route path="/counter">
          <LinkButton to="/" className="absolute left-4 top-4">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </LinkButton>
          <Counter />
        </Route>
        <Route path="/todo">
          <LinkButton to="/" className="absolute left-4 top-4">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </LinkButton>
          <TodoList />
        </Route>
        <Route path="/ajax">
          <LinkButton to="/" className="absolute left-4 top-4">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </LinkButton>
          <AjaxList />
        </Route>
        <Route path="/altermap">
          <LinkButton to="/" className="absolute left-4 top-4 z-1">
            <FontAwesomeIcon icon={faAngleDoubleLeft} className="mx-2" />
            Go to home
          </LinkButton>
          <Altermap />
        </Route>
        <Route path="/rick-market">
          <Route path="/rick-market" exact>
            <RickMarket />
          </Route>
          <Route path="/rick-market/cart">
            <RickMarketHeader />
            <RickMarketCart />
            <RickMarketFooter />
          </Route>
        </Route>
        <Route>
          <UnknownRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
