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
                className="h-[300px] sm:h-[500px] w-full object-cover"
                src={element.Url}
                alt="Imagen de cesped"
              />
              <div className="absolute bottom-12 sm:bottom-10 left-5 sm:left-20 md:left-40 lg:left-80 flex flex-col gap-5">
                <h2 className="text-3xl sm:text-6xl font-semibold text-primary-50">
                  {element.Title}
                </h2>
                <h3 className="text-md sm:text-2xl font-semibold text-primary-50">
                  {element.Description}
                </h3>
                <Button className="w-28 sm:w-36 bg-primary-600 text-primary-50">
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