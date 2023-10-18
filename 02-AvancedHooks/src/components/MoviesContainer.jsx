import { Card, Button, CardFooter, Image } from "@nextui-org/react";
import { useEffect } from "react";
import { animateCards } from "../animations/card";

export const MoviesContainer = ({ movies }) => {
  useEffect(() => {
    animateCards();
  }, [movies]);

  return (
    <section className="bg-primar w-full">
      <div className="movies-container">
        {movies &&
          movies.map((movie) => {
            if (movie.Poster == "N/A") return;
            return (
              <Card
                shadow="lg"
                className="w-200px card-animated max-h-[430px] min-h-[430px] min-w-[300px] opacity-0 shadow-2xl"
                key={movie.imdbID}
                isFooterBlurred
                radius="lg"
              >
                <Image
                  classNames="w-full h-full"
                  isZoomed
                  alt={movie.imdbID}
                  className="object-cover"
                  src={movie.Poster}
                />
                <CardFooter
                  color="secondary"
                  className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 bg-black py-1 shadow-small before:rounded-xl before:bg-white/10"
                >
                  <p className="text-tiny text-white/80">{movie.Title}</p>
                  <Button
                    className="bg-black/20 text-tiny text-white"
                    variant="flat"
                    color="default"
                    radius="lg"
                    size="sm"
                  >
                    {movie.Year}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
    </section>
  );
};
