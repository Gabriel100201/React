import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts.js";
import { useContext, useEffect, useState } from "react";
import { filtersContext } from "../context/filters.jsx";

export const AllProducts = () => {
  const { filters } = useContext(filtersContext);
  const { products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const applyFilter = () => {
    const filtered = products.filter((product) => {
      if (
        product.Off > filters.Off &&
        product.Precio <= filters.maxPrice &&
        product.Precio >= filters.minPrice
      )
        return product.Off > filters.Off;
      else return false;
    });
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    applyFilter();
  }, [filters, products]);

  return (
    <div className="flex w-full flex-col gap-10 bg-primary-100 px-40 py-20">
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
      </div>
    </div>
  );
};
