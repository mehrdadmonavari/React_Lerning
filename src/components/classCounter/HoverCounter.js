import WithCounter from "../../hoc/WithCounter";

const HoverCounter = ({count, incrementCount}) => {
  return (
    <div>
      <button onMouseOver={incrementCount}>Hover Counter: {count}</button>
    </div>
  );
};

export default WithCounter(HoverCounter, 10);
