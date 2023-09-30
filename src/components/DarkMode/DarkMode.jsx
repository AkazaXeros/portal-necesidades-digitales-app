import { createContext, useContext, useState } from "react";

const DarkMode = createContext();

export const useDarkMode = () => useContext(DarkMode);

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <DarkMode.Provider value={[darkMode, setDarkMode]}>
      {children}
    </DarkMode.Provider>
  );
}
