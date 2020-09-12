import React from "react";
import { Link } from "react-router-dom";

function NetlifyDeployment() {
  return (
    <section className="w-full md:max-w-11/12 lg:max-w-10/12 mx-auto py-12 px-4">
      <h1 className="font-medium text-blue-700 mt-12 text-3xl md:text-6xl uppercase">
        Deloyement time !
      </h1>
      <h3 className="text-blue-500 mb-8 text-xl">
        Netlify deployment isn't too hard I promise
      </h3>
      <p className="leading-7 text-blue-400 text-lg">
        We are the September 8 of 2020, it's day 5 of the challenge and I send
        it to web! I'm know isn't big projects or very powerful site BUT it's
        the challenge!
        <br />
      </p>
      <div className="my-4 leading-8 text-blue-400 text-lg">
        <h4 className="text-blue-500 text-center text-xl my-4">
          Progress of projects
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 col-gap-2 row-gap-4">
          {/* Done projects */}
          <div className="list-done flex flex-col leading-8">
            <span className="border-b border-blue-700 py-4 text-xl text-center ">
              <span aria-label="tick icon" role="img">
                ✅
              </span>{" "}
              Done
            </span>
            <Link className="list-item-done" to="/counter">
              Start with a counter
            </Link>
            <Link className="list-item-done" to="/todo">
              Continue with a todo-list
            </Link>
            <Link className="list-item-done" to="ajax">
              Do an app with async request (for redux)
            </Link>
            <Link className="list-item-done" to="/altermap">
              Leaflet app (like one of my other project)
            </Link>
            <Link className="list-item-done" to="/unknown">
              Do a 404 page
            </Link>
            <Link className="list-item-done" to="/rick-market">
              Sell Rick and Morty character in Rick Market
            </Link>
            <Link className="list-item-done" to="/wip">
              Construct a Work In Progress page
            </Link>
            <Link className="list-item-done" to="/netlify-deployement">
              Write an article about Netlify deployment
            </Link>
            <Link className="list-item-done" to="/weather">
              Create a simple weather app
            </Link>
            <Link to="/linter-formatter-article">Add ESlint and prettier</Link>
            <Link to="/not-done">Create Not Done page</Link>
            <Link to="/calculator">Do a calculator</Link>
          </div>

          {/* Wip projects */}
          <div className="list-wip flex flex-col leading-8">
            <span className="border-b border-blue-700 py-4 text-xl text-center">
              <span aria-label="wip icon" role="img">
                🚧
              </span>{" "}
              Work In Progress
            </span>
            <p className="text-center">I finish everythings today !</p>
          </div>

          {/* Not Done projets */}
          <div className="list-not-done flex flex-col leading-8">
            <span className="border-b border-blue-700 py-4 text-xl text-center">
              <span aria-label="not-done icon" role="img">
                ❌
              </span>{" "}
              Not Done
            </span>
            <Link to="/husky-setup">Husky for git</Link>
            <Link to="/customer-dash">Customer dashboard</Link>
            <Link to="/cgithub-profile">GitHub profile</Link>
            <Link to="/not-done">Some more things !</Link>
          </div>
        </div>
      </div>

      <p className="mb-4 mt-8 leading-7 text-blue-400 text-lg">
        The challenge end the September 21 of 2020, because I do all of this
        project to be ready for my new job !
        <br />
        I do this for pleasure more than my actual job so be kind about projects
        width !
        <br />
      </p>
      <p className="my-4 leading-7 text-blue-400 text-lg">
        So, Netlify deployment should (is) be the central part this article !
        The question is how I done that ?
        <br />
      </p>
      <div className="my-4 leading-7 text-blue-400 text-lg">
        <span className="text-lg font-semibold">It was really simple :</span>
        <ul className="list-done">
          <a
            className="ml-4"
            href="https://www.netlify.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to Netlify website (click on)
          </a>
          <li className="ml-4">Signin</li>
          <li className="ml-4">Add new repository from github for example</li>
          <li className="ml-4">Use basic configuration</li>
          <li className="ml-4">Enjoy !</li>
        </ul>
      </div>
      <p className="mt-8 text-blue-700 text-lg text-center">
        All of website code will be available when challenge end I promise
        (contact me if i forgot !)
      </p>
    </section>
  );
}

export default NetlifyDeployment;
