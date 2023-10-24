import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const { isAuth, login, logout } = useAuth();
  console.log(isAuth);

  return (
    <LoginContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
