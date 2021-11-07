import WithCounter from "../../hoc/WithCounter";

const ClickCounter = ({count, incrementCount}) => {
  return (
    <div>
      <button onClick={incrementCount}>Click Counter: {count}</button>
    </div>
  );
};

export default WithCounter(ClickCounter, 4);
