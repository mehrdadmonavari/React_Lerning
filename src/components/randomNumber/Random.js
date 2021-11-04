import { useState } from "react";

const Random = () => {
  const [items, setItems] = useState([]);

  const creatRandomHandler = () => {
    return { number: Math.floor(Math.random() * 10) };
  };

  const addRandomHandler = () => {
    setItems([...items, creatRandomHandler()]);
    console.log(items);
  };

  return (
    <div>
      <button onClick={addRandomHandler}>createRandomNumber</button>
      <ul>
        {items.map((i) => {
          return <li>{i.number}</li>;
        })}
      </ul>
    </div>
  );
};

export default Random;
