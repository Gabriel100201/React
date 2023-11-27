import { createContext, useState } from "react";

export const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    maxPrice: 5000,
    minPrice: 0,
    argentina: true,
    offers: false,
    freeSend: false,
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
    <FiltersContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
