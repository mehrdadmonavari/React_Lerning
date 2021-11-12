import React from "react";
import { Random, RandomActions } from "./RandomProvider";

const RandomOne = () => {
  const random = Random();
  const randomActions = RandomActions();
  console.log(randomActions);
  return (
    <div>
      <div>random is: {random}</div>
      <button onClick={randomActions.createRandomHandler}>create random</button>
    </div>
  );
};

export default RandomOne;
