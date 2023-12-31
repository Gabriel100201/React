import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts.js";
import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/filters.jsx";
import { useSearch } from "../hooks/useSearch";
import noResults from "../assets/noProducts.png";

export const AllProducts = () => {
  const { filters } = useContext(FiltersContext);
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { searchResults, setLowerSearch } = useSearch();
  const [backgroundColor, setBackgroundColor] = useState("bg-primary-100");

  useEffect(() => {
    setLowerSearch(filters.word);
  }, [filters]);

  useEffect(() => {
    setFilteredProducts(searchResults);
  }, [searchResults]);

  useEffect(() => {
    applyFilter();
  }, [filters, products]);

  useEffect(() => {
    setBackgroundColor(
      filteredProducts.length === 0 ? "bg-yellow-100" : "bg-primary-100",
    );
  }, [filteredProducts]);

  const applyFilter = () => {
    const filtered = searchResults.filter((product) => {
      const categoryFilter =
        (filters.argentina && product.Category === "argentina") ||
        (filters.offers && product.Category === "offers") ||
        (filters.freeSend && product.Category === "freeSend") ||
        (filters.mundiales && product.Category === "mundiales") ||
        (filters.premier && product.Category === "premier") ||
        (filters.bundesliga && product.Category === "bundesliga") ||
        (filters.serieA && product.Category === "serieA") ||
        (filters.laLiga && product.Category === "laLiga");

      return (
        product.Off >= filters.Off &&
        product.Precio <= filters.maxPrice &&
        product.Precio >= filters.minPrice &&
        categoryFilter
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <div
      className={`flex w-full flex-col gap-10 ${backgroundColor} px-10 py-20 sm:px-7 md:px-20 lg:px-36`}
    >
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))] items-center justify-center gap-10">
        {filteredProducts &&
          filteredProducts.map((element, index) => {
            if (index <= 30) {
              return (
                <ProductCard
                  key={element.Nombre + element.Url}
                  imageUrl={element.Url}
                  name={element.Nombre}
                  price={element.Precio}
                  description={element.Descripcion}
                  off={element.Off}
                ></ProductCard>
              );
            }
          })}
        {filteredProducts.length == 0 && (
          <div className="flex w-full flex-col items-center justify-center">
            <img
              src={noResults}
              alt="no product image"
              className="w-full max-w-[300px]"
            />
            <div className="flex items-center justify-center rounded-full bg-yellow-300/80 px-3 py-1">
              <span className="text-md text-center font-bold text-gray-600">
                No se encontraron productos
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
