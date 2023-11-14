import { ProductCard } from "./ProductCard";
import productsOffer from "../mocks/productsOffer.json";

export const Offer = () => {
  return (
    <div className="flex flex-col gap-10 bg-primary-100 px-80 py-10">
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold text-primary-900">
          Las mejores ofertas de este mes 🔥
        </span>
        <a href="#">
          <span className="text-lg font-semibold text-primary-700">
            Ver más ➜
          </span>
        </a>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))] items-center justify-center gap-10">
        {productsOffer &&
          productsOffer.map((element, index) => {
            if (index <= 4) {
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