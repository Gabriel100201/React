import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";

export const ProductCard = ({ off, name, description, price, imageUrl }) => {
  const prevPrice = price + price * (off / 100);
  return (
    <Card isFooterBlurred className="h-[280px] w-full">
      <CardHeader className="absolute top-1 z-10 flex-col items-start">
        <p className="text-md font-bold uppercase text-green-300">-{off}%</p>
      </CardHeader>
      <Image
        removeWrapper
        alt={`Imagen de ${name}`}
        className="z-0 h-full w-full object-cover"
        src={imageUrl}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-primary-300/30 dark:border-default-100">
        <div>
          <div className="flex items-center justify-start gap-3">
            <p className="text-lg font-bold text-black">$ {price}</p>
            <p className="text-md text-gray-500 line-through">$ {prevPrice}</p>
          </div>
          <p className="font-semibold text-primary-900">{name}</p>
          <p className="text-tiny text-black">{description?.slice(0, 40)}...</p>
        </div>
      </CardFooter>
    </Card>
  );
};
