import { Button } from "@nextui-org/react";
import { Carousel } from "flowbite-react";
import bannerInfo from "../mocks/bannerInfo.json";

export const Banner = () => {
  return (
    <Carousel>
      {bannerInfo &&
        bannerInfo.map((element, index) => {
          return (
            <div key={element.Url} className="relative w-full">
              <img
                className="h-[500px] w-full object-cover"
                src={element.Url}
                alt="Imagen de cesped"
              />
              <div className="absolute bottom-10 left-80 flex flex-col gap-5">
                <h2 className="text-6xl font-semibold text-primary-50">
                  {element.Title}
                </h2>
                <h3 className="text-2xl font-semibold text-primary-50">
                  {element.Description}
                </h3>
                <Button className="w-36 bg-primary-600 text-primary-50">
                  {element.ButtonText}
                </Button>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};
