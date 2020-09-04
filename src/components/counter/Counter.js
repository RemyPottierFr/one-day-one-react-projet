import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../../actions";

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);
  const [inputIncrement, setInputIncrement] = useState(1);
  return (
    <div className="App">
      <h1 className="text-6xl text-blue-500">{counter}</h1>
      <div className="my-2">
        <button
          className="button"
          onClick={() => dispatch(counterActions.increment())}
        >
          +
        </button>

        <button
          className="button"
          onClick={() => dispatch(counterActions.decrement())}
        >
          -
        </button>
      </div>
      <form
        className="my-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(counterActions.inputStep(inputIncrement));
        }}
      >
        <input
          className="input"
          value={inputIncrement}
          onChange={(e) => setInputIncrement(+e.target.value)}
          type="number"
        />
        <button className="button" type="submit">
          Add more
        </button>
      </form>
    </div>
  );
}

export default Counter;
