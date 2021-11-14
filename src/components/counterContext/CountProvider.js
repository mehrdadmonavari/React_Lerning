import { createContext, useContext, useReducer } from "react";

const initialState = { firstCount: 0, secondCount: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementFirstCount":
      return { ...state, firstCount: state.firstCount + action.value };
    case "DecrementFirstCount":
      return { ...state, firstCount: state.firstCount - action.value };
    case "ResetFirstCount":
      return { ...state, firstCount: initialState.firstCount };
    case "IncrementSecondCount":
      return { ...state, secondCount: state.secondCount + action.value };
    case "DecrementSecondCount":
      return { ...state, secondCount: state.secondCount - action.value };
    case "ResetSecondCount":
      return { ...state, secondCount: initialState.secondCount };
    default:
      return { state };
  }
};

const countContext = createContext();

const countContextDispatcher = createContext();

const CountProvider = ({ children }) => {
  const [count, countDispatch] = useReducer(reducer, initialState);

  return (
    <countContext.Provider value={count}>
      <countContextDispatcher.Provider value={countDispatch}>
        {children}
      </countContextDispatcher.Provider>
    </countContext.Provider>
  );
};

export default CountProvider;

export const useCount = () => {
  return useContext(countContext);
};

export const useCountDispatch = () => {
  return useContext(countContextDispatcher);
};
