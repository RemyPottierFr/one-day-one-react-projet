import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { rickMarketActions } from "../../actions";

function RickMarketCartItem({ item }) {
  const dispatch = useDispatch();

  const updateQte = (id, type, quantity) => {
    if (type === "+") {
      dispatch(rickMarketActions.changeQte(id, quantity + 1));
    } else {
      quantity - 1 > 0
        ? dispatch(rickMarketActions.changeQte(id, quantity - 1))
        : dispatch(rickMarketActions.removeItem(id));
    }
  };

  return (
    <div
      key={item.id}
      className="shadow-inner-lg rounded flex px-4 py-2 hover:shadow-lg"
    >
      <img
        src={item.image}
        alt="item avatar"
        className={`w-32 h-32 rounded-full border-2 ${
          item.status === "Dead"
            ? "border-red-600"
            : item.status === "Alive"
            ? "border-green-600"
            : "border-black"
        }`}
      />
      <div className="px-4 py-2 flex flex-col">
        <span className="text-xl text-blue-700">{item.name}</span>
        <span className="text-blue-400">From {item.location.name}</span>
        <div>
          <span className="text-blue-500">Quantity :</span>
          <button
            className="focus:outline-none px-2 py-1 text-lg text-blue-700 rounded-full shadow-inner-lg hover:shadow-lg mx-2"
            onClick={() => updateQte(item.id, "-", item.quantity)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="text-xl text-blue-500">{item.quantity}</span>
          <button
            className="focus:outline-none px-2 py-1 text-lg text-blue-700 rounded-full shadow-inner-lg hover:shadow-lg mx-2"
            onClick={() => updateQte(item.id, "+", item.quantity)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <span className="text-blue-500">Price : {item.price}$</span>
      </div>
    </div>
  );
}

export default RickMarketCartItem;
