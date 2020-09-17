import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SwitchRouter from "./components/switch";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleDarkMode = () => {
    setDarkTheme(!darkTheme);
    console.log(darkTheme);
  };
  return (
    <Router>
      <main className={darkTheme ? "dark-theme min-h-screen" : "min-h-screen"}>
        <SwitchRouter />
        <footer className="py-8 relative">
          <div className="absolute top-8 right-8">
            <button
              onClick={() => handleDarkMode()}
              className="button"
              title="If doesn't work it's because you are in dark mode with your pc"
            >
              {darkTheme ? "Go light" : "Go dark"}
            </button>
          </div>
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
      </main>
    </Router>
  );
}

export default App;
