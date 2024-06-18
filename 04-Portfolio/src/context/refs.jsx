import React, { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const experienciaRef = useRef(null);
  const proyectosRef = useRef(null);
  const sobreMiRef = useRef(null);
  const contactoRef = useRef(null);

  return (
    <ScrollContext.Provider
      value={{
        experienciaRef,
        proyectosRef,
        sobreMiRef,
        contactoRef,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
