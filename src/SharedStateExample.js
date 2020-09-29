import React from 'react';
import { useState, useContext } from 'react';

const SharedStateContext = React.createContext({
  value: 0,
  increment: () => {},
});

export const SharedStateProvider = ({ children }) => {
  const [value, setValue] = useState(1);
  const increment = () => setValue((v) => v + 1);

  return (
    <SharedStateContext.Provider value={{ value, increment }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => useContext(SharedStateContext);
