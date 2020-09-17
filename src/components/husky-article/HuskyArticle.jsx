import React from "react";
import { CodeSnippet } from "../shared";

export default function HuskyArticle() {
  return (
    <section className="w-full md:max-w-11/12 lg:max-w-10/12 mx-auto py-12 px-4">
      <h1 className="font-medium text-blue-700 mt-12 text-3xl md:text-5xl uppercase">
        Need verifications !
      </h1>
      <h3 className="text-blue-500 mb-8 text-xl">
        No problems for this, but I explain why
      </h3>
      <p className="leading-7 text-blue-400 text-lg">
        I know, I know I haven't post a project since 3 days but first it's
        false because I have add a customer panel (not really working I know
        this ...). <br />
        So to be forgiven, I install husky for git and I'm gonna do a refactor
        of my code to improve this cool but dirty code !<br />
        But before refactoring, I'm gonna explain who to add Husky to our
        prefered projects !<br />
        First step : Install husky in your project !
      </p>
      <CodeSnippet>yarn add husky -D</CodeSnippet>
      <div className="flex items-center max-w-64 my-4 mx-auto">
        <div className="border border-blue-500 w-full"></div>
        <span className="text-blue-400 text-lg mx-4">ou</span>
        <div className="border border-blue-500 w-full"></div>
      </div>
      <CodeSnippet>npm install husky --save-dev</CodeSnippet>
      <p className="leading-7 text-blue-400 text-lg">
        And that's practically finish !<br />
        Now add our verification scripts in package.json like :
      </p>
      <CodeSnippet>{`${`"husky": {
    "hooks": {
      "pre-commit": "yarn lint",
      "pre-push": "yarn lint"
    }
}`}`}</CodeSnippet>
      <p className="leading-7 text-blue-400 text-lg">
        Some others scripts exist and you can see them{" "}
        <a
          href="https://github.com/typicode/husky#supported-hooks"
          className="underline"
        >
          here
        </a>{" "}
        <span role="img" aria-label="wink emoji">
          😉
        </span>
        <br />
        But now it's time for refactor !<br />
        I'm gonna implement : <br />
        <span className="mr-2" role="img" aria-label="emoji">
          ❌
        </span>{" "}
        Create switch component to clear App.jsx <br />
        <span className="mr-2" role="img" aria-label="emoji">
          ❌
        </span>{" "}
        Refactor some of components <br />
        <span className="mr-2" role="img" aria-label="emoji">
          ❌
        </span>{" "}
        Dark mode <br />
        <span className="mr-2" role="img" aria-label="emoji">
          ❌
        </span>{" "}
        Tell me more{" "}
        <a
          href="https://youtu.be/ODOj2jBUKW0?t=30"
          title="I never seen this movie 🤐"
          target="_blank"
          rel="noopener noreferrer"
        >
          (not the song)
        </a>
      </p>
    </section>
  );
}
