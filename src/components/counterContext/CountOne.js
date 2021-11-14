import { useCount, useCountDispatch } from "./CountProvider";

const CountOne = () => {

  const countDispatch = useCountDispatch();

  const count = useCount();

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
              countDispatch({ type: "IncrementSecondCount", value: 5 })
            }
          >
            addFive
          </button>
          <button
            className="btn btn-outline-danger mx-2"
            onClick={() =>
              countDispatch({ type: "DecrementSecondCount", value: 1 })
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

export default CountOne;
