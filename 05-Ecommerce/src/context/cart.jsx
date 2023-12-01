import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (newItem, cant) => {
    //find devuelve true si encuentra el elemento dentro del array
    if (cart.find((item) => item.name === newItem.name)) {
      newItem.count += cant;
      return;
    }
    newItem.count = cant;
    //ASI
    /* const newCart = cart ? [...cart] : []
    newCart.push(newItem);
    console.log(newCart);
    setCart(newCart) */
    // O ASI
    /* Se crea una copia del array para que la referencia se modifique
    Si no los cambios no se veran reflejados en la interfaz */
    setCart([...cart, newItem]);
    setCount(count + 1);
  };

  const removeToCart = (id) => {
    //filter devuelve el array modificado sin el elemento que deseeamos
    const updatedCart = cart.filter((item) => item.name !== id);
    setCart(updatedCart);
    setCount(count - 1);
  };

  return (
    <CartContext.Provider value={{ cart, count, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};