import { Button } from "@nextui-org/react";
import { Carousel } from "flowbite-react";
import { useBanner } from "../hooks/useBanner";
import { Link } from "react-router-dom";

export const Banner = () => {
  const { products: bannerInfo, loading, error, getProducts } = useBanner();

  return (
    <Carousel>
      {bannerInfo &&
        bannerInfo.map((element, index) => {
          return (
            <div key={element.Url} className="relative w-full">
              <img
                className="h-[300px] w-full object-cover sm:h-[500px]"
                src={element.Url}
                alt="Imagen de cesped"
              />
              <div className="absolute bottom-12 left-5 flex flex-col gap-5 sm:bottom-10 sm:left-20 md:left-40 lg:left-80">
                <h2 className="text-3xl font-semibold text-primary-50 sm:text-6xl">
                  {element.Title}
                </h2>
                <h3 className="text-md font-semibold text-primary-50 sm:text-2xl">
                  {element.Description}
                </h3>
                <Button className="w-28 bg-primary-600 text-primary-50 sm:w-36">
                  <Link to="all" state={{ offers: true }}>
                    {element.ButtonText}
                  </Link>
                </Button>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};
