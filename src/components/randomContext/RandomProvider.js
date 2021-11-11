import React, { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const RandomContext = createContext();
export const RandomContextDispatch = createContext();

const RandomProvider = ({ children }) => {
  const [random, setRandom] = useState([]);

  const createRandomHandler = () => {
    const createdRandom = Math.ceil(Math.random() * 10);
    setRandom([...random, createdRandom]);
  };
  return (
    <RandomContext.Provider value={random}>
      <RandomContextDispatch.Provider value={createRandomHandler}>
        {children}
      </RandomContextDispatch.Provider>
    </RandomContext.Provider>
  );
};

export default RandomProvider;
