import React, { useContext } from "react";
import { RandomContext, RandomContextDispatch } from "./RandomProvider";

const RandomOne = () => {
  const random = useContext(RandomContext);
    const onRandom = useContext(RandomContextDispatch);

  return (
    <div>
      <div>random is : {random}</div>
      <button onClick={onRandom}>create random</button>
    </div>
  );
};

export default RandomOne;
