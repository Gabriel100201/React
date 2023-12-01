import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedView = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return <div>{children}</div>;
};
