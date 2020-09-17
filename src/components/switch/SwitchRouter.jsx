import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import AjaxList from "../ajax-list";
import Altermap from "../altermap";
import Calculator from "../calculator";
import Counter from "../counter";
import EslintPrettierArticle from "../eslint-prettier-article/EslintPrettierArticle";
import Home from "../home";
import HuskyArticle from "../husky-article";
import NetlifyDeployment from "../netlify-deployement";
import NotDone from "../not-done";
import RickMarket, {
  RickMarketCart,
  RickMarketFooter,
  RickMarketHeader,
} from "../rick-market";
import { LinkButton } from "../shared";
import TodoList from "../todo-list";
import UnknownRoute from "../unknown-route";
import WeatherApp from "../weather-app";
import Wip from "../wip";
import Admin from "../admin";

function SwitchRouter() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
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
        <LinkButton className="absolute left-4 top-4" to="/">
          <FontAwesomeIcon className="mx-2" icon={faAngleDoubleLeft} />
          Go to home
        </LinkButton>
        <HuskyArticle />
      </Route>
      <Route path="/customer-dash">
        <Suspense fallback={<div>Loading ...</div>}>
          <Admin />
        </Suspense>
      </Route>
      <Route path="/github-profile">
        <NotDone />
      </Route>
      <Route>
        <UnknownRoute />
      </Route>
    </Switch>
  );
}

export default SwitchRouter;
