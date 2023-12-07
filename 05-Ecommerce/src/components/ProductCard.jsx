import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ off, name, description, price, imageUrl }) => {
  const prevPrice = price + price * (off / 100);
  return (
    <Link
      to={"/products/" + name}
      state={{ name, description, off, price, imageUrl }}
    >
      <Card className="h-full w-full">
        <Image
          removeWrapper
          alt={`Imagen de ${name}`}
          className="z-0 h-48 max-h-56 w-full scale-105 object-cover"
          src={imageUrl}
        />
        <CardFooter className="z-10 bg-primary-200">
          <div>
            <div className="flex items-center justify-start gap-3">
              <p className="text-md font-bold text-black sm:text-lg">
                $ {price}
              </p>
              {off > 0 && (
                <>
                  <p className="sm:text-md hidden text-sm text-gray-500 line-through sm:flex">
                    $ {prevPrice}
                  </p>
                  <p className="sm:text-md text-sm font-bold uppercase text-green-600">
                    -{off}%
                  </p>
                </>
              )}
            </div>
            <p className="font-semibold text-primary-900">
              {name?.slice(0, 15)}
            </p>
            <p className="text-tiny text-black">
              {description?.slice(0, 40)}...
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
