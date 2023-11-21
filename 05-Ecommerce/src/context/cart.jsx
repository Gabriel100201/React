import { createContext, useState } from "react";

//creacion del contexto
export const cartContext = createContext();

//creacion del proveedor
export const CartProvider = ({ children }) => {
  //definicion del estado inicial y la funcion que lo actualiza
  const [cart, setCart] = useState([]);

  //funciones que actualizan el estado del carrito
  const addToCart = (value) => {
    setCart(value);
  };

  // retorno del proveedero del contexto creado con sus valor inicial y sus funciones correspondientes
  return (
    <cartContext.Provider value={{ cart, addToCart }}>
      {children}
    </cartContext.Provider>
  );
};
