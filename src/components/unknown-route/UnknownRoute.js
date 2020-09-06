import React, { useState, useCallback } from "react";
import { ajaxActions } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./unknown.css";
import { Link } from "react-router-dom";

function UnknownRoute() {
  const dispatch = useDispatch();
  const { ajaxList } = useSelector((state) => state);
  let [roll, setRoll] = useState(false);

  const findRandomCharacter = useCallback(() => {
    dispatch(ajaxActions.queryRandomCharacter());
  }, [dispatch]);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl my-16 text-blue-500 font-hairline">
        Nothing here we're sorry for this !
      </h1>
      <p className="text-2xl text-blue-500">
        To handle this error we give you a random Rick and Morty character
      </p>
      <div>
        {ajaxList.map((character) => {
          return (
            <div
              key={character}
              className="flex flex-col justify-center items-center my-8"
            >
              <button
                className="w-48 h-48 random-character relative focus:outline-none"
                onClick={() => {
                  setRoll(true);
                  setTimeout(() => {
                    findRandomCharacter();
                    setRoll(false);
                  }, 1000);
                }}
              >
                <img
                  src={character.image}
                  className={`w-48 h-48 rounded-full border-4 mb-4 relative ${
                    character.status === "Dead"
                      ? "border-red-600"
                      : character.status === "Alive"
                      ? "border-green-600"
                      : "border-black"
                  } ${roll ? "barrel-roll" : ""}`}
                  alt="character avatar"
                />
              </button>
              <h4 className="text-xl text-blue-500">{character.name}</h4>
              <h5 className="text-lg text-blue-400">
                From {character.location.name}
              </h5>
            </div>
          );
        })}
      </div>
      <Link to="/">
        <button className="button">Return to home page</button>
      </Link>
      <span className="text-blue-300">(it's better for you)</span>
    </div>
  );
}

export default UnknownRoute;
