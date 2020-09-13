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
import Wip from "./components/wip";
import NetlifyDeployment from "./components/netlify-deployement";
import WeatherApp from "./components/weather-app";
import EslintPrettierArticle from "./components/eslint-prettier-article/EslintPrettierArticle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { LinkButton } from "./components/shared";
import NotDone from "./components/not-done";
import Calculator from "./components/calculator";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="flex flex-col justify-center py-16 px-8 font-hairline">
            <h1 className="text-5xl text-blue-500 text-center">
              Welcome to learn-redux project
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 col-gap-4 row-gap-4 my-8">
              <LinkButton className="panel done" to="/counter">
                <span>Counter</span>
              </LinkButton>
              <LinkButton className="panel done" to="/todo">
                <span>Todo List</span>
              </LinkButton>
              <LinkButton className="panel done" to="/ajax">
                <span>Ajax</span>
              </LinkButton>
              <LinkButton className="panel done" to="/altermap">
                <span>Altermap</span>
              </LinkButton>
              <LinkButton className="panel done" to="/unknown">
                <span>?</span>
              </LinkButton>
              <LinkButton className="panel done" to="/rick-market">
                <span>Rick Market</span>
              </LinkButton>
              <LinkButton className="panel done" to="/wip">
                <span>Work In Progress</span>
              </LinkButton>
              <LinkButton className="panel done" to="/netlify-deployement">
                <span>Netlify deployement</span>
              </LinkButton>
              <LinkButton className="panel done" to="/weather">
                <span>Weather App</span>
              </LinkButton>
              <LinkButton className="panel done" to="/linter-formatter-article">
                <span>Add linter and formatter</span>
              </LinkButton>
              <LinkButton className="panel done" to="/not-done">
                <span>Not done page (≠ wip)</span>
              </LinkButton>
              <LinkButton className="panel done" to="/calculator">
                <span>Calculator</span>
              </LinkButton>
              <LinkButton className="panel wip" to="/husky-setup">
                <span>Setup Husky for git</span>
              </LinkButton>
              <LinkButton className="panel not-done" to="/customer-dash">
                <span>Customer dashboard</span>
              </LinkButton>
              <LinkButton className="panel not-done" to="/github-profile">
                <span>GitHub profile</span>
              </LinkButton>
            </div>
          </div>
        </Route>
        <Route path="/counter">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <Counter />
        </Route>
        <Route path="/todo">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <TodoList />
        </Route>
        <Route path="/ajax">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <AjaxList />
        </Route>
        <Route path="/altermap">
          <LinkButton className="absolute left-4 top-4 z-1" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <Altermap />
        </Route>
        <Route path="/rick-market">
          <Route exact path="/rick-market">
            <RickMarket />
          </Route>
          <Route path="/rick-market/cart">
            <RickMarketHeader />
            <RickMarketCart />
            <RickMarketFooter />
          </Route>
        </Route>
        <Route path="/calculator">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <Calculator />
        </Route>
        <Route path="/weather">
          <LinkButton className="absolute left-4 top-4 z-1" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <WeatherApp />
        </Route>
        <Route path="/wip">
          <Wip />
        </Route>
        <Route path="/not-done">
          <NotDone />
        </Route>
        <Route path="/netlify-deployement">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <NetlifyDeployment />
        </Route>
        <Route path="/linter-formatter-article">
          <LinkButton className="absolute left-4 top-4" to="/">
            <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
            Go to home
          </LinkButton>
          <EslintPrettierArticle />
        </Route>
        <Route path="/husky-setup">
          <Wip />
        </Route>
        <Route path="/customer-dash">
          <NotDone />
        </Route>
        <Route path="/github-profile">
          <NotDone />
        </Route>
        <Route>
          <UnknownRoute />
        </Route>
      </Switch>
      <footer className="my-8">
        <p className="text-center text-2xl text-blue-500">
          Made with{" "}
          <span aria-label="heart icon" role="img">
            ❤️
          </span>{" "}
          by{" "}
          <a
            className="underline"
            href="https://www.malt.fr/profile/remypottier"
            rel="noopener noreferrer"
            target="_blank"
          >
            Rémy Pottier
          </a>
        </p>
      </footer>
    </Router>
  );
}

export default App;
