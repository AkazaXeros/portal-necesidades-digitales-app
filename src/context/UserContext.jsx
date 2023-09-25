// Importing hook from React
import { useNavigate } from "react-router-dom";

import { createContext, useContext, useEffect, useState } from "react";

// Importing getUserDataService
import { getUserDataService } from "../services";

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const userData = async () => {
      try {
        const data = await getUserDataService(token);
        setUser(data);
      } catch (err) {
        logout();
      }
    };

    if (token) userData();
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
