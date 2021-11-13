import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "IncrementOne":
      return state + 1;
      break;
    case "IncrementFive":
      return state + 5;
      break;
    case "DecrementOne":
      return state - 1;
      break;
    default:
      return state;
  }
};

const CountReducer = () => {
  const [count, countDispatch] = useReducer(reducer, initialState);

  return <div>
    <div>count is : {count}</div>
    <button onClick={() => {countDispatch("IncrementOne")}}>add One</button>
    <button onClick={() => {countDispatch("IncrementFive")}}>add Five</button>
    <button onClick={() => {countDispatch("DecrementOne")}}>decrement One</button>
  </div>;
};

export default CountReducer;