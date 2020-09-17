import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRouter from "./components/switch";

function App() {
  return (
    <Router>
      <SwitchRouter />
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
