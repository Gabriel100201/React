import { useEffect, useState } from "react";
import products from "../mocks/products.json";

export const useSearch = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const setLowerSearch = (word) => {
    // Implementar validacion de que tipo de strings de pueden recibir
    setSearch(word.toLowerCase());
  }

  // Cada vez que cambia la palabra buscar entre los productos
  useEffect(() => {
    // Cambiar por fetch a la api con filtro por palabra
    const productsFiltered = products.filter((product) => (
      product.Nombre.toLowerCase().includes(search)
    ));
    setSearchResults(productsFiltered);
  }, [search]);

  return {
    searchResults, setLowerSearch
  }
}
