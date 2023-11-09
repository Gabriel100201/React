import { Card, CardFooter, Image } from "@nextui-org/react";

export const ProductCard = ({ off, name, description, price, imageUrl }) => {
  const prevPrice = price + price * (off / 100);
  return (
    <a href={`http://localhost:5173/${name}`}>
      <Card className=" w-full">
        <Image
          removeWrapper
          alt={`Imagen de ${name}`}
          className="z-0 max-h-56 w-full scale-105 object-cover"
          src={imageUrl}
        />
        <CardFooter className="bg-primary-200 z-10">
          <div>
            <div className="flex items-center justify-start gap-3">
              <p className="text-lg font-bold text-black">$ {price}</p>
              <p className="text-md text-gray-500 line-through">
                $ {prevPrice}
              </p>
              <p className="text-md font-bold uppercase text-green-600">
                -{off}%
              </p>
            </div>
            <p className="font-semibold text-primary-900">{name}</p>
            <p className="text-tiny text-black">
              {description?.slice(0, 40)}...
            </p>
          </div>
        </CardFooter>
      </Card>
    </a>
  );
};
