import { createContext, useState } from 'react';

const AthenaContext = createContext();

const AthenaProvider = ({ children }) => {
  const [athenaState, setAthenaState] = useState({
    // Add initial state here
  });

  return (
    <AthenaContext.Provider value={{ athenaState, setAthenaState }}>
      {children}
    </AthenaContext.Provider>
  );
};

export { AthenaProvider, AthenaContext };