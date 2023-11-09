import { ProductCard } from "./ProductCard";
import Jabulani from "../assets/Jabulani.jpg";
export const Offer = () => {
  return (
    <div className="px-80">
      <div className="flex items-center justify-start">
        <span className="text-primary-50">
          Las mejores ofertas de este mes 🔥
        </span>
        <span className="text-primary-300">Ver mas ➜</span>
      </div>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] items-center justify-center gap-10">
        <ProductCard
          off={50}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
          imageUrl={Jabulani}
        ></ProductCard>
        <ProductCard
          off={50}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
        ></ProductCard>
        <ProductCard
          off={50}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
        ></ProductCard>
        <ProductCard
          off={50}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
        ></ProductCard>
        <ProductCard
          off={10}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
        ></ProductCard>
        <ProductCard
          off={50}
          name={"Nombre"}
          price={2000}
          description={"Descripcion del producto mas pequeña"}
        ></ProductCard>
      </div>
    </div>
  );
};
