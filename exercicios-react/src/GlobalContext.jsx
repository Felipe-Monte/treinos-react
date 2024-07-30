import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);

  function addOne() {
    setCount((count) => count + 1);
  }

  function addTen() {
    setCount((count) => count + 10);
  }

  return (
    <GlobalContext.Provider value={{ count, addOne, addTen }}>
      {children}
    </GlobalContext.Provider>
  );
};
