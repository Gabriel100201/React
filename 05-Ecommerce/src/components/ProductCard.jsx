import { Card, CardFooter, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const ProductCard = ({ off, name, description, price, imageUrl }) => {
  const prevPrice = price + price * (off / 100);
  return (
    <Link
      to={"/products/" + name}
      state={{ name, description, off, price, imageUrl }}
    >
      <Card className=" w-full">
        <Image
          removeWrapper
          alt={`Imagen de ${name}`}
          className="z-0 max-h-56 w-full scale-105 object-cover"
          src={imageUrl}
        />
        <CardFooter className="z-10 bg-primary-200">
          <div>
            <div className="flex items-center justify-start gap-3">
              <p className="text-lg font-bold text-black">$ {price}</p>
              {off && (
                <>
                  <p className="text-md text-gray-500 line-through">
                    $ {prevPrice}
                  </p>
                  <p className="text-md font-bold uppercase text-green-600">
                    -{off}%
                  </p>
                </>
              )}
            </div>
            <p className="font-semibold text-primary-900">{name}</p>
            <p className="text-tiny text-black">
              {description?.slice(0, 40)}...
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
