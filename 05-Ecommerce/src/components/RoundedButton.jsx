import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { CartButton } from "./CartButton";

export const RoundedButton = ({ children, text }) => {
  const { count } = useContext(CartContext);
  const [popAvtive, setPopActive] = useState(false);

  // Funciones que activen el texto descriptivo de cada botón
  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };

  return (
    <div className="relative">
      {text == "Cart" && (
        <CartButton
          handleLeave={handleLeave}
          handleEnter={handleEnter}
          children={children}
          text={text}
        ></CartButton>
      )}
      {text != "Cart" && (
        <button
          onClick={handleLeave}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="flex items-center justify-center rounded-full  p-2 hover:bg-primary-200"
        >
          {children}
        </button>
      )}
      {popAvtive && (
        <div className="absolute left-1/2 top-16 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200 p-3 py-2">
          <span className="transform font-semibold text-primary-800">
            {text}
          </span>
          {count > 0 && text == "Cart" && (
            <span className="ml-3 transform rounded-full bg-primary-400 px-3 font-semibold text-primary-50">
              {count}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
