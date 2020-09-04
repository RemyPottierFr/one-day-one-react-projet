import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxActions } from "../../actions";
import AjaxItem from "./AjaxItem";

export default function AjaxList() {
  const dispatch = useDispatch();
  const { ajaxList } = useSelector((state) => state);

  return (
    <div className="py-16 flex flex-col">
      <h2 className="text-3xl text-blue-500 text-center">
        Ajax for Rick and Morty
      </h2>
      <div>
        <button
          className="button"
          onClick={() => {
            dispatch(ajaxActions.queryAllCharacters());
          }}
        >
          Query all
        </button>
        <button
          className="button"
          onClick={() => {
            dispatch(ajaxActions.queryCharacterWithId(5));
          }}
        >
          Query character n°5
        </button>
        <button
          className="button"
          onClick={() => dispatch(ajaxActions.queryRandomCharacter())}
        >
          Random character
        </button>
      </div>
      <div className="grid row-gap-4 grid-cols-1 px-4 py-8">
        {ajaxList.map((character) => {
          return <AjaxItem character={character} />;
        })}
      </div>
    </div>
  );
}
