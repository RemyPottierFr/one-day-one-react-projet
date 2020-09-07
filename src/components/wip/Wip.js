import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Wip() {
  const [progressBar, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress((progress) => (progress !== 100 ? progress + 1 : 0));
    }, 50);
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [progressBar]);

  return (
    <div className="flex flex-col items-center justify-center py-24 px-8">
      <h1 className="text-6xl mb-2 text-blue-500 font-hairline">
        Work in progress here
      </h1>
      <h3 className="text-lg text-blue-300 mb-8">
        It gonna be alvailable when it's finished I promise
      </h3>
      <div className="w-2/5 rounded-full py-8">
        <h5 className="text-center text-blue-500 mb-2">
          We're from {100 - progressBar}% of projet finish !
        </h5>
        <div
          className="h-3 rounded-full from-blue-100 to-blue-700 bg-gradient-to-r"
          style={{ width: progressBar + "%" }}
        ></div>
      </div>
      <Link to="/">
        <button className="button">
          <FontAwesomeIcon icon={faAngleLeft} className="mr-2" />
          Return to home
        </button>
      </Link>
    </div>
  );
}

export default Wip;
