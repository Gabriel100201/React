import { createContext, useState } from "react";

// Crear el contexto
export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState({
    primary: "bg-red-500",
    secondary: "bg-sky-300",
  });

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
