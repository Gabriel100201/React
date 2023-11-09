import { Button } from "@nextui-org/react";
import banner from "../assets/banner.jpg";

export const Banner = () => {
  return (
    <div className="relative w-full">
      <img
        className="h-[500px] w-full object-cover"
        src={banner}
        alt="Imagen de cesped"
      />
      <div className="absolute bottom-10 left-80 flex flex-col gap-5">
        <h2 className="text-6xl font-semibold text-primary-50">
          Diciembre Promocional
        </h2>
        <h3 className="text-2xl font-semibold text-primary-50">
          Hasta 30% de descuento en balones historicos
        </h3>
        <Button className="w-36 bg-primary-600 text-primary-50">
          Ver Ofertas
        </Button>
      </div>
    </div>
  );
};
