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
      <Button className="absolute bottom-10 left-10 w-36 bg-primary-600 text-primary-50">
        Ofertas
      </Button>
    </div>
  );
};
