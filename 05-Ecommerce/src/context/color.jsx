import { useReducer } from "react";
import { createContext, useState } from "react";

// Crear el contexto
export const ColorContext = createContext();

// Definimos un estado inicial y el recuctor, el cual indicara de que forma se va a actualizar el state
const initialState = "bg-slate-400";
// State seria el valor anterior
const reducer = (state, action) => {
  // Type es el tipo de accion que se debe ejecutar
  // payload es el valor que se debe usar para actualizar el estado
  const { type: actionType, payload: actionPayload } = action;

  console.log(state);
  switch (actionType) {
    case "SET_COLOR_BLUE": {
      const newColor = actionPayload;
      return newColor;
    }
    case "SET_COLOR_RED": {
      const newColor = actionPayload;
      return newColor;
    }
    case "SET_COLOR_GREEN": {
      const newColor = actionPayload;
      return newColor;
    }
  }
};

// Creamos el proveedor
export const ColorProvider = ({ children }) => {
  //Declaramos state y dispatch con useReduce, y le pasamos el reducer y estado inicial previamente creados
  const [state, dispacth] = useReducer(reducer, initialState);

  // Definimos los metodos y usamos dispatch para usar el reucer, pasando type y payload

  const changeColorBlue = () => {
    dispacth({
      type: "SET_COLOR_BLUE",
      payload: "bg-blue-400",
    });
  };
  const changeColorGreen = () => {
    dispacth({
      type: "SET_COLOR_GREEN",
      payload: "bg-green-400",
    });
  };
  const changeColorRed = () => {
    dispacth({
      type: "SET_COLOR_RED",
      payload: "bg-red-400",
    });
  };

  // Envolvemos el children con el provider y le pasamos como valor el stat y las funciones que lo actualizan
  return (
    <ColorContext.Provider
      value={{
        color: state,
        changeColorBlue,
        changeColorGreen,
        changeColorRed,
      }}
    >
      {children}
    </ColorContext.Provider>
  );
};
