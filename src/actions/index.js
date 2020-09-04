import * as ajaxActions from "./ajaxActions";

export { ajaxActions };

export const increment = () => ({
  type: "INCREMENT",
});
export const decrement = () => ({
  type: "DECREMENT",
});
export const inputStep = (step) => ({
  type: "INPUTSTEP",
  payload: { step },
});
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: {
    id: todo.id,
    message: todo.message,
    show: todo.show,
  },
});
export const updateTodoMessage = (todo) => ({
  type: "UPDATE_TODO_MESSAGE",
  payload: {
    id: todo.id,
    message: todo.message,
  },
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});
export const undoDeleteTodo = (id) => ({
  type: "UNDO_DELETE_TODO",
  payload: {
    id,
  },
});
export const toggleVisibilityTodo = (id) => ({
  type: "TOGGLE_VISIBILITY_TODO",
  payload: {
    id,
  },
});
