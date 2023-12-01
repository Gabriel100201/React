import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/login';
import { toast } from 'sonner';

export const ProtectedView = ({ children }) => {
  const { isLogged } = useContext(LoginContext)
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
      toast("Inicia Sesión para acceder a todas las características")
    }
  }, []);

  return <div>{children}</div>;
};
