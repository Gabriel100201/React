import { useContext, useEffect, useState } from "react";
import products from "../mocks/products.json";

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Guardar valor de palabra solo si no es vacía
  const setLowerSearch = (word) => {
    // Implementar validacion de que tipo de strings de pueden recibir
    setSearch(word.toLowerCase());
  }

  // Cada vez que cambia la palabra buscar entre los productos
  useEffect(() => {
    const productsFiltered = products.filter((product) => (
      product.Nombre.toLowerCase().includes(search)
    ));
    setSearchResults(productsFiltered);
  }, [search]);

  return {
    searchResults, setLowerSearch
  }
}
