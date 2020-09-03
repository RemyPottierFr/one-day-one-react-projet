import React from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { useSelector } from "react-redux";

function TodoList() {
  const { todoList } = useSelector((state) => state);

  return (
    <div className="w-screen min-h-screen bg-gray-200 flex flex-col p-8 font-hairline">
      <h1 className="text-center text-3xl text-blue-500">
        Welcome on todo redux
      </h1>
      <div className="w-8/12 mx-auto my-4">
        <AddTodo />
      </div>
      <section className="w-7/12 mx-auto my-8">
        <h3>Todo :</h3>
        {todoList.map(
          (todo) =>
            todo.show &&
            !todo.deleted && (
              <Todo
                id={todo.id}
                show={todo.show}
                message={todo.message}
                deleted={todo.deleted}
                key={todo.id}
              />
            )
        )}
      </section>
      <section className="w-7/12 mx-auto my-8">
        <h3>Done :</h3>
        {todoList.map(
          (todo) =>
            !todo.show &&
            !todo.deleted && (
              <Todo
                id={todo.id}
                show={todo.show}
                message={todo.message}
                deleted={todo.deleted}
                key={todo.id}
              />
            )
        )}
      </section>
      <section className="w-7/12 mx-auto my-8">
        <h3>Deleted :</h3>
        {todoList.map(
          (todo) =>
            todo.deleted && (
              <Todo
                id={todo.id}
                show={todo.show}
                message={todo.message}
                deleted={todo.deleted}
                key={todo.id}
              />
            )
        )}
      </section>
    </div>
  );
}

export default TodoList;
