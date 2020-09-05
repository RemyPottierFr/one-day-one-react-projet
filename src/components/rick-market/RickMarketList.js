import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajaxActions, rickMarketActions } from "../../actions";

function RickMarketList() {
  const dispatch = useDispatch();
  const { ajaxList, rickMarketCart } = useSelector((state) => state);

  useEffect(() => {
    dispatch(ajaxActions.queryAllCharacters());
  }, [dispatch]);

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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-10/12 lg:8/12 mx-auto mt-24 py-16 col-gap-8 row-gap-8">
      {ajaxList.map((character) => {
        return (
          <div
            key={character.id}
            className="flex flex-col justify-center items-center px-2 py-4 shadow-inner-lg hover:shadow-lg bg-white"
          >
            <div className="w-full relative focus:outline-none px-4 lg:px-8">
              <img
                src={character.image}
                className={`w-full h-auto rounded-full border-4 mb-4 relative shadow-xl ${
                  character.status === "Dead"
                    ? "border-red-600"
                    : character.status === "Alive"
                    ? "border-green-600"
                    : "border-black"
                }`}
                alt="character avatar"
              />
            </div>
            <h4 className="text-xl text-blue-500">{character.name}</h4>
            <span className="text-sm text-blue-200 text-center">
              From <br />
              {character.location.name}
            </span>
            <button
              onClick={() => addToCart(character)}
              className="mt-4 mb-2 px-4 py-2 transition-all duration-500 shadow-lg hover:shadow-inner-lg rounded"
            >
              Only{" "}
              {character.id * character.name.length +
                character.location.name.length -
                character.species.length}
              $
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default RickMarketList;
