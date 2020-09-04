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
        onSubmit={(e) => {
          e.preventDefault();
          createTodo();
        }}
        className="flex items-center bg-white rounded px-4 py-2"
      >
        <input
          autoFocus
          value={todo.message}
          onChange={(e) => updateMessage(e.target.value)}
          className="bg-transparent w-full text-xl text-blue-500 border-b-2 border-blue-500 focus:outline-none"
        />
        <button type="submit" className="button">
          +
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
