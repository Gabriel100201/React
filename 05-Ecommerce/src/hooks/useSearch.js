import { useContext, useEffect, useState } from "react";
import products from "../mocks/products.json";
import { FiltersContext } from "../context/filters.jsx";

export const useSearch = () => {
  const { filters } = useContext(FiltersContext);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const setLowerSearch = (word) => {
    setSearch(word.toLowerCase());
  }

  useEffect(() => {
    if (search === "") {
      setSearchResults([]);
      return;
    }

    const productsFiltered = products.filter((product) => (
      product.Nombre.toLowerCase().includes(search)
    ));

    setSearchResults(productsFiltered);

  }, [search, filters]);

  return {
    searchResults, setLowerSearch
  }
}
