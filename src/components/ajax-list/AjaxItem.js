import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDizzy,
  faHeart,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default function AjaxItem({ character }) {
  return (
    <div className="w-full bg-white bg-opacity-75 flex flex-row">
      <img src={character.image} className="w-24 h-24" alt="character avatar" />
      <div className="ml-4 py-2">
        <h4 className="text-xl text-blue-500 font-bold flex items-center">
          {character.name}
          <span className="text-sm text-gray-500 mx-2 font-hairline">
            {character.species}
          </span>
        </h4>
        <h4 className="text-lg">
          Status :
          {character.status === "Alive" && (
            <span className="text-red-500 ml-2">
              Is alive <FontAwesomeIcon icon={faHeart} />
            </span>
          )}
          {character.status === "Dead" && (
            <span className="text-black ml-2">
              Is dead <FontAwesomeIcon icon={faDizzy} />
            </span>
          )}
          {character.status === "unknown" && (
            <span className="text-blue-500 ml-2">
              We don't know <FontAwesomeIcon icon={faQuestion} />
            </span>
          )}
        </h4>
        <h4>Come from {character.origin.name}</h4>
      </div>
    </div>
  );
}
