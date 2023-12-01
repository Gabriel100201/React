import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/login';

export const ProtectedView = ({ children }) => {
  const { isLogged } = useContext(LoginContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};
