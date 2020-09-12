import React, { useState, useEffect, useCallback } from "react";

function Calculator() {
  const [operation, setOperation] = useState("0");
  const [calculated, setCalculated] = useState(false);
  const numbers = [...Array(10).keys()].reverse();
  const operators = [
    { text: "x", op: "*" },
    { text: "/", op: "/" },
    { text: "-", op: "-" },
    { text: "+", op: "+" },
  ];

  const calculate = useCallback(() => {
    /*eslint-disable */
    setOperation((state) =>
      Function(`'use strict'; return (${state})`)().toFixed(4)
    );
    /*eslint-disable */
    setCalculated(true);
  }, [operation]);

  /*eslint-disable */
  // Eslint disable du to missing dependancy but
  // I Don't want to execute this useEffect twice or more
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        calculate();
      }
      if (
        Number(event.key) ||
        operators.filter((op) => op.op === event.key).length > 0
      ) {
        setOperation((state) => state + `${event.key}`);
      }
      if (event.key === "Backspace") {
        !calculated &&
          setOperation((state) =>
            state.length > 1 ? state.substring(0, state.length - 1) : "0"
          );
      }
    });
  }, []);
  /*eslint-disable */

  useEffect(() => {
    console.log(calculated);
    setOperation((state) => {
      if (state[0] === "0" && state !== "0") {
        setCalculated(false);
        return state.substring(1);
      } else {
        return state;
      }
    });
  }, [operation]);

  return (
    <section className="py-16 px-4 flex flex-col items-center">
      <h1 className="text-blue-500 font-hairline text-center text-4xl mb-8">
        Calculator
      </h1>
      <div className="w-full md:w-2/5 shadow-md rounded-lg px-8 py-4">
        <div className="shadow-inner-lg rounded text-right px-4 py-2">
          <span className="text-blue-300 text-3xl font-hairline">
            {operation}
          </span>
        </div>
        <div className="grid grid-cols-4 col-gap-2 row-gap-4 mt-8">
          <div className="col-span-3 row-span-4 grid grid-cols-3 row-gap-4 col-gap-2">
            {numbers.map((number) => {
              return (
                <button
                  key={number}
                  className="button rounded-full text-2xl"
                  onClick={() => setOperation((state) => state + `${number}`)}
                >
                  {number}
                </button>
              );
            })}
            <button
              className="button rounded-full text-2xl"
              onClick={() => setOperation((state) => state + ".")}
            >
              .
            </button>
            <button
              className="button rounded-full text-2xl"
              onClick={calculate}
            >
              =
            </button>
          </div>
          {operators.map((operator) => {
            return (
              <button
                key={operator.op}
                className="button rounded-full text-2xl"
                onClick={() =>
                  setOperation((state) => state + `${operator.op}`)
                }
              >
                {operator.text}
              </button>
            );
          })}
          <button
            className="button rounded-full text-2xl col-span-4"
            onClick={() => setOperation("0")}
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
