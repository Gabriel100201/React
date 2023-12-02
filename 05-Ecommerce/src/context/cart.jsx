import { createContext, useState } from "react";
import { toast } from "sonner";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (newItem, cant) => {

    const existingItemIndex = cart.findIndex((item) => item.name === newItem.name);

    if (existingItemIndex !== -1) {
      setCart(prevCart => prevCart.map((item, index) => (
        index === existingItemIndex
          ? { ...item, count: item.count + cant }
          : item
      )));
    } else {
      newItem.count = cant;
      setCart([...cart, newItem]);
      toast.success("Producto agregado con éxito");
      setCount(count + 1);
    }
  };

  const removeToCart = (id) => {
    //filter devuelve el array modificado sin el elemento que deseeamos
    const updatedCart = cart.filter((item) => item.name !== id);
    setCart(updatedCart);
    setCount(count - 1);
    toast.success("Producto eliminado con éxito")
  };

  return (
    <CartContext.Provider value={{ cart, count, addToCart, removeToCart }}>
      {children}
    </CartContext.Provider>
  );
};