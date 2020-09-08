import React, { useState } from "react";
import { useSelector } from "react-redux";
import RickMarketCartItem from "./RickMarketCartItem";
import { Link } from "react-router-dom";

function RickMarketCart() {
  const { rickMarketCart } = useSelector((state) => state);
  const [isPaid, setIsPaid] = useState(false);
  return (
    <section className="bg-gray-100 px-4 py-8 mt-24 pt-16">
      <div className="bg-white rounded p-4">
        {rickMarketCart.length > 0 && (
          <h2 className="text-3xl my-4 text-blue-500">
            Cart of your character
          </h2>
        )}
        <div className="grid grid-cols-1 row-gap-6">
          {rickMarketCart.length === 0 ? (
            <div className="flex flex-col items-center justify-center my-8">
              <p className="text-center text-blue-500 text-2xl mb-4">
                Nothing in your cart, it's sad !
              </p>
              <Link to="/rick-market">
                <button className="button">Go buy some characters</button>
              </Link>
            </div>
          ) : (
            rickMarketCart.map((item) => {
              return <RickMarketCartItem item={item} key={item.id} />;
            })
          )}
        </div>
        {rickMarketCart.length > 0 && (
          <div className="flex flex-row items-center">
            <button className="button my-4" onClick={() => setIsPaid(!isPaid)}>
              For a total of{" "}
              {rickMarketCart.reduce(
                (acc, value) => (acc += value.quantity * value.price),
                0
              )}
              $
            </button>
            {isPaid && (
              <p className="text-green-600 fade-bottom ml-8">
                Cool now you got{" "}
                {rickMarketCart.reduce(
                  (acc, value) => (acc += value.quantity),
                  0
                )}{" "}
                characters of Rick and Morty !
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default RickMarketCart;
