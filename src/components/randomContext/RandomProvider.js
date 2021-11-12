import React, { createContext, useState, useContext } from "react";

const RandomContext = createContext();
const RandomContextDispatch = createContext();

const RandomProvider = ({ children }) => {
  const [random, setRandom] = useState([]);

  return (
    <RandomContext.Provider value={random}>
      <RandomContextDispatch.Provider value={setRandom}>
        {children}
      </RandomContextDispatch.Provider>
    </RandomContext.Provider>
  );
};

export default RandomProvider;

export const Random = () => useContext(RandomContext);

export const RandomActions = () => {
  const random = useContext(RandomContext);
  const setRandom = useContext(RandomContextDispatch);

  const createRandomHandler = () => {
    const createdRandom = Math.ceil(Math.random() * 10);
    setRandom([...random, createdRandom]);
  };

  return {createRandomHandler};
};
