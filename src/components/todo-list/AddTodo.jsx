import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../actions";

function AddTodo() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    id: 0,
    message: "",
    show: true,
    deleted: false,
  });

  const updateMessage = (message) => {
    setTodo({
      ...todo,
      message: message.charAt(0).toUpperCase() + message.slice(1),
    });
  };

  const createTodo = () => {
    if (todo.message.length > 0) {
      setTodo({
        ...todo,
        id: (todo.id += 1),
      });
      dispatch(todoActions.addTodo({ ...todo, message: todo.message.trim() }));
      setTodo({
        ...todo,
        message: "",
      });
    }
  };

  return (
    <div>
      <form
        className="flex items-center shadow-lg rounded px-4 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
        }}
      >
        <input
          autoFocus
          className="bg-transparent w-full text-xl text-blue-500 border-b-2 border-blue-500 focus:outline-none"
          onChange={(e) => updateMessage(e.target.value)}
          required
          value={todo.message}
        />
        <button
          className="focus:outline-none px-3 text-3xl rounded shadow-md hover:shadow-inner-md focus:shadow-inner-lg ml-2 text-blue-500"
          type="submit"
        >
          +
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
