import { useReducer } from "react";

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

const CountReducer = () => {
  const [count, countDispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="row border border-secondary rounded mx-5 my-3 p-3">
        <div className="col-md-3 pt-1 text-center">
          count is : {count.firstCount}
        </div>
        <div className="col-md-6 ml-5 text-center">
          <button
            className="btn btn-outline-info mx-2"
            onClick={() =>
              countDispatch({ type: "IncrementFirstCount", value: 1 })
            }
          >
            addOne
          </button>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() =>
              countDispatch({ type: "IncrementFirstCount", value: 5 })
            }
          >
            addFive
          </button>
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() =>
              countDispatch({ type: "DecrementFirstCount", value: 1 })
            }
          >
            decrement
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => countDispatch({ type: "ResetFirstCount" })}
          >
            reset
          </button>
        </div>
      </div>
      <div className="row border border-secondary rounded mx-5 my-3 p-3">
        <div className="col-md-3 pt-1 text-center">
          count is : {count.secondCount}
        </div>
        <div className="col-md-6 ml-5 text-center">
          <button
            className="btn btn-outline-info mx-2"
            onClick={() =>
              countDispatch({ type: "IncrementSecondCount", value: 1 })
            }
          >
            addOne
          </button>
          <button
            className="btn btn-outline-info mx-2"
            onClick={() =>
              countDispatch({ type: "IncrementSecondCount", value: 1 })
            }
          >
            addFive
          </button>
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() =>
              countDispatch({ type: "IncrementSecondCount", value: 1 })
            }
          >
            decrement
          </button>
          <button
            className="btn btn-outline-secondary mx-2"
            onClick={() => countDispatch({ type: "ResetSecondCount" })}
          >
            reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountReducer;
