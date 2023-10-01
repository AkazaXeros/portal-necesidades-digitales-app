// Importing hooks from React.
import { createContext, useContext, useState } from 'react';

export const FilterContext = createContext();
export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [category, setCategory] = useState('');

  return (
    <FilterContext.Provider value={{ category, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
};
