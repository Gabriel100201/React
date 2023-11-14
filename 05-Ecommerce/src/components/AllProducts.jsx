import { ProductCard } from "./ProductCard";
import products from "../mocks/products.json";

export const AllProducts = () => {
  return (
    <div className="flex w-full flex-col gap-10 bg-primary-100 px-40 py-20">
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(210px,_1fr))] items-center justify-center gap-10">
        {products &&
          products.map((element, index) => {
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
