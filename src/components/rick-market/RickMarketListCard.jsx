import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { rickMarketActions } from "../../actions";
import "./rick-market.css";

function RickMarketListCard({ character }) {
  const dispatch = useDispatch();
  const { rickMarketCart } = useSelector((state) => state);

  const addToCart = (character) => {
    if (rickMarketCart.filter((x) => x.id === character.id).length === 0) {
      dispatch(
        rickMarketActions.addItem({
          ...character,
          quantity: 1,
          price:
            character.id * character.name.length +
            character.location.name.length -
            character.species.length,
        })
      );
    } else {
      dispatch(
        rickMarketActions.changeQte(
          character.id,
          (rickMarketCart.filter((x) => x.id === character.id)[0].quantity += 1)
        )
      );
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center px-2 py-4 shadow-inner-lg hover:shadow-lg bg-white"
      key={character.id}
    >
      <div className="w-full relative focus:outline-none px-4 lg:px-8">
        <img
          alt="character avatar"
          className={`w-full h-auto rounded-full border-4 mb-4 relative shadow-xl ${
            character.status === "Dead"
              ? "border-red-600"
              : character.status === "Alive"
              ? "border-green-600"
              : "border-black"
          }`}
          src={character.image}
        />
      </div>
      <h4 className="text-xl text-blue-500">{character.name}</h4>
      <span className="text-sm text-blue-200 text-center">
        From <br />
        {character.location.name}
      </span>
      <button
        className="mt-4 mb-2 px-4 py-2 transition-all duration-500 shadow-lg hover:shadow-inner-lg rounded focus:outline-none button-cart"
        onClick={() => addToCart(character)}
      >
        Only{" "}
        {character.id * character.name.length +
          character.location.name.length -
          character.species.length}
        $
      </button>
    </div>
  );
}

export default RickMarketListCard;
