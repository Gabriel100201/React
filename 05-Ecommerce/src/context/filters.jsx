import { createContext, useState } from "react";

export const filtersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    maxPrice: 5000,
    minPrice: 0,
    argentina: true,
    offers: true,
    freeSend: true,
    mundiales: true,
    premier: true,
    bundesliga: true,
    serieA: true,
    laLiga: true,
    Off: 40,
  });

  const updateFilters = (target, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [target]: value,
    }));
  };

  return (
    <filtersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </filtersContext.Provider>
  );
};
