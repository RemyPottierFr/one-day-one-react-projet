import React from "react";
import { useSelector } from "react-redux";

function RickMarketCart() {
  const { rickMarketCart } = useSelector((state) => state);
  return (
    <section className="bg-gray-100 px-4 py-8 mt-24 pt-16">
      <div className="bg-white rounded p-4">
        <h2 className="text-xl text-blue-500 font-hairline">Cart</h2>
        <div className="grid grid-cols-1 row-gap-4">
          {rickMarketCart.map((item) => {
            return (
              <div key={item.id}>
                <img src={item.image} alt="item avatar" />
                <span>{item.name}</span>
                <span>From {item.location.name}</span>
                <span>
                  Price :{" "}
                  {item.id * item.name.length +
                    item.location.name.length -
                    item.species.length}
                </span>
                <span>
                  Quantity : {item.quantity} unit{item.quantity ? "s" : ""}
                </span>
                <span>Price : {item.price}€</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RickMarketCart;
