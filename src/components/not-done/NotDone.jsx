import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function NotDone() {
  // If you see this code yeah I kwnow it's the same of wip page
  // But it's between us, right ?
  const [progressBar, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress((progress) => (progress !== 100 ? progress + 1 : 0));
    }, 1000);
    return function cleanup() {
      clearTimeout(timeout);
    };
  }, [progressBar]);

  return (
    <section className="my-16 flex flex-col justify-center items-center">
      <h1 className="text-blue-700 text-4xl text-center">
        This page isn't done for the moment sorry!
      </h1>
      <div className="w-3/5 rounded-full py-12">
        <div className="flex justify-between">
          <div className="flex flex-col items-center -mb-4">
            <span className="my-2 text-blue-700">Now</span>
            <div className="w-2 h-6 shadow-lg bg-red-600"></div>
          </div>
          <div className="flex flex-col items-center text-blue-700">
            <span>Not done poucentage</span>
            <span>{100 - progressBar}%</span>
          </div>
          <div className="flex flex-col items-center -mb-4">
            <span className="my-2 text-blue-700">Done</span>
            <div className="w-2 h-6 shadow-lg bg-blue-100"></div>
          </div>
        </div>
        <div
          className="h-3 rounded-full from-red-600 to-blue-100 bg-gradient-to-r"
          style={{ width: progressBar + "%" }}
        ></div>
      </div>
      <p className="text-blue-500 my-8 text-xl">
        Now you see this, you should go back, right ?
      </p>
      <Link to="/">
        <button className="button">
          <FontAwesomeIcon icon={faAngleLeft} /> Return home
        </button>
      </Link>
    </section>
  );
}

export default NotDone;
