import { ProductCard } from "./ProductCard";
import products from "../mocks/products.json";
import { Link } from "react-router-dom";

export const Latest = () => {
  return (
    <div className="flex flex-col gap-10 bg-primary-100 px-80 py-10">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-primary-900">
          Últimos añadidos ⏲️
        </span>
        <a href="#">
          <span className="text-lg font-semibold text-primary-700">
            Ver Todos ➜
          </span>
        </a>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))] items-center justify-center gap-10">
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
