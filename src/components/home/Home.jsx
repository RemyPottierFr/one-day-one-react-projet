import React from "react";
import { LinkButton } from "../shared";

function Home() {
  return (
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
        <LinkButton className="panel done" to="/husky-setup">
          <span>Setup Husky for git</span>
        </LinkButton>
        <LinkButton className="panel done" to="/customer-dash">
          <span>Bugged dashboard</span>
        </LinkButton>
        <LinkButton className="panel not-done" to="/github-profile">
          <span>GitHub profile</span>
        </LinkButton>
      </div>
    </div>
  );
}

export default Home;
