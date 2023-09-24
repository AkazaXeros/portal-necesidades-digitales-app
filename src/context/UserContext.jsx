import { createContext, useContext, useEffect, useState } from 'react';
import { getUserDataService } from '../services';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('token', token);
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
    setToken('');
    setUser(null);
    navigate('/');
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
