import React from "react";
import { CodeSnippet } from "../shared";

function EslintPrettierArticle() {
  return (
    <section className="w-full md:max-w-11/12 lg:max-w-10/12 mx-auto py-12 px-4">
      <h1 className="font-medium text-blue-700 mt-12 text-3xl md:text-5xl uppercase">
        Time to clean everythings!
      </h1>
      <h3 className="text-blue-500 mb-8 text-xl">
        It was more difficult than netlify but don't worry!
      </h3>
      <p className="leading-7 text-blue-400 text-lg">
        Today it's do 1 week since i start the challenge and it's one of the
        best idea I got since a while!
        <br />
        Eslint isn't like Netlify, I have to do everythings with my little hands
        and it's so satisfactory to control all part of the projet. But somes
        problems could happen, like every developer I known everythings need to
        be perfect so it's take so much time to have the better configuration,
        better framework ...
        <br />
        But this time I choice to do different, be productive and don't lose
        time on stack. If I want to have a good project every day, powerful
        stack is essential.
        <br />
      </p>
      <div className="citation">
        <span>Write less, do more</span>
        <p>Rich Harris, Graphics Editor at New York Times</p>
      </div>
      <p className="leading-7 text-blue-400 text-lg">
        Like Rich Harris says, we need to stay focus on our goal. I don't need a
        massive configuration to create cool things every day!
        <br />
        But let's focus on Eslint and Prettier. <br />
        First eslint really like jsx (yeah I don't use jsx at project start...),
        so I change every files by hand... It's a trap! Like everyone I go to
        StackOverflow and "find the solution"{" "}
        <span role="img" aria-label="winking face">
          😉
        </span>
        .<br />
        <br />
        I'm cool I give you this one !
      </p>
      <CodeSnippet>
        find . -name '*.js' -exec sh -c 'mv "$0" "${"{"}0%.jsx{"}"}.jsx"' {} \;
      </CodeSnippet>
      <span className="text-blue-400 text-sm">
        This code snippet was very slow to create damn{" "}
        <span role="img" aria-label="whoa face">
          😆
        </span>
      </span>
      <p className="leading-7 text-blue-400 text-lg mt-4">
        After this step, I can start the script
      </p>
      <CodeSnippet>eslint --init</CodeSnippet>
      <p className="leading-7 text-blue-400 text-lg mt-4">
        Now Eslint is initalized with selected options (thanks to the cli on
        init !), so eslint can be use by scripts but isn't finished! Now start
        with Prettier. This step is pretty simple :
      </p>
      <span className="mt-4 text-blue-400 text-lg">
        Run this command to add prettier to your project
      </span>
      <CodeSnippet>yarn add prettier -D</CodeSnippet>
      <span className="mt-4 text-blue-400 text-lg">
        Create prettier config file to add options if needed
      </span>
      <CodeSnippet>echo {"{}>"} .prettierrc.json</CodeSnippet>
      <span className="mt-4 text-blue-400 text-lg">
        Create .pretttierignore for specific folders / files
      </span>
      <CodeSnippet>touch .prettierignore</CodeSnippet>
      <span className="mt-4 text-blue-400 text-lg">
        Add ignored files and folder to the prettierignore
      </span>
      <CodeSnippet>
        {`build
coverage
node_modules
.vscode
main.css`}
      </CodeSnippet>
      <p className="leading-7 text-blue-400 text-lg">
        Now we do all of the actions (normaly) all is good!
        <br />
        So Yesterday, i start not-done page (gonna be fast) and I have more time
        I should start calculator!
      </p>
    </section>
  );
}

export default EslintPrettierArticle;
