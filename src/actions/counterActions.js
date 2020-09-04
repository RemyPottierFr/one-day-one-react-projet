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
