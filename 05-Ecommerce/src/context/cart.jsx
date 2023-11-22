import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (newItem, cant) => {
    if (cart.find((item) => item.name === newItem.name)) {
      newItem.count += cant;
      return;
    }
    newItem.count = 1;
    setCart([...cart, newItem]);
    setCount(count + 1);
  };

  const removeToCart = (value) => {
    const updatedCart = cart.filter((item) => item !== value);
    setCart(updatedCart);
    setCount(count - 1);
  };

  return (
    <cartContext.Provider value={{ cart, count, addToCart, removeToCart }}>
      {children}
    </cartContext.Provider>
  );
};
