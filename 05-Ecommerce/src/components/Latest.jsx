import { ProductCard } from "./ProductCard";
import { Link } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

export const Latest = () => {
  const { products, loading, error, getProducts } = useProducts();

  return (
    <div className="d-padding flex flex-col gap-10 bg-primary-100 py-10">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-primary-900">
          Últimos añadidos
        </span>
        <Link to={"all"}>
          <span className="hidden text-lg font-semibold text-primary-700 sm:flex">
            Ver Todos ➜
          </span>
        </Link>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] items-center justify-center gap-5 sm:gap-10 md:grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))]">
        {products &&
          products.map((element, index) => {
            if (index <= 10) {
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
      <div className="flex w-full items-center justify-center">
        <Link to="all">
          <span className="text-xl font-semibold text-primary-900">
            Ver más ➜
          </span>
        </Link>
      </div>
    </div>
  );
};
