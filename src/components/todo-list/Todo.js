import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faCheck,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./todo.css";

function Todo({ id, show, message, deleted }) {
  const dispatch = useDispatch();
  let [todoMessage, setTodoMessage] = useState(message);
  let [verifyDelete, setVerifyDelete] = useState(false);
  let [verifyUndo, setVerifyUndo] = useState(false);

  const changeTodoVisibility = (id) => {
    dispatch(todoActions.toggleVisibilityTodo(id));
  };

  const removeTodo = (id) => {
    if (verifyDelete) {
      dispatch(todoActions.deleteTodo(id));
    } else {
      setVerifyDelete((x) => (x = !x));
    }
  };

  const undoRemoveTodo = (id) => {
    if (verifyUndo) {
      console.log("delete");
      dispatch(todoActions.undoDeleteTodo(id));
    } else {
      setVerifyUndo((x) => (x = !x));
    }
  };

  const updateMessage = (id, value) => {
    if (value !== message) {
      dispatch(todoActions.updateTodoMessage({ id, message: value }));
      !show && dispatch(todoActions.toggleVisibilityTodo(id));
    }
  };

  return (
    <div className="bg-white bg-opacity-75 rounded text-xl flex flex-row justify-between items-center py-2 px-4 overflow-hidden">
      <input
        type="checkbox"
        checked={!show}
        onChange={() => changeTodoVisibility(id)}
        className="mx-2"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateMessage(id, todoMessage);
        }}
        className="flex flex-row items-center w-full relative"
      >
        <input
          className={`w-full bg-transparent ${!show ? "line-through" : ""}`}
          value={todoMessage}
          onChange={(e) => setTodoMessage(e.target.value)}
        />
        {todoMessage !== message && (
          <button
            type="submit"
            className="text-green-600 absolute right-0 top-0"
          >
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
        )}
      </form>
      {!deleted ? (
        <button
          onClick={() => removeTodo(id)}
          onBlur={() => setVerifyDelete(false)}
          className="text-red-600 flex items-center focus:outline-none"
          type="submit"
        >
          <span className={!verifyDelete ? "spin" : ""}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
          <span className={verifyDelete ? "block ml-2 fromRight" : "hidden"}>
            Delete
          </span>
        </button>
      ) : (
        <button
          onClick={() => undoRemoveTodo(id)}
          onBlur={() => setVerifyUndo(false)}
          className={`text-green-600 flex items-center focus:outline-none`}
          type="submit"
        >
          <span className={!verifyUndo ? "full-spin" : ""}>
            <FontAwesomeIcon icon={faCheck} />
          </span>
          <span className={verifyUndo ? "block ml-2 fromRight" : "hidden"}>
            Undo
          </span>
        </button>
      )}
    </div>
  );
}

export default Todo;
