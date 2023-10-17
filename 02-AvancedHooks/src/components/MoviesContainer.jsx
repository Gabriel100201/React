import {
  Card,
  Button,
  CardFooter,
  Image,
  CircularProgress,
} from "@nextui-org/react";
import { useEffect } from "react";

export const MoviesContainer = ({ movies, loading }) => {
  return (
    <section className="bg-primar w-full">
      <div className="movies-container">
        {loading && (
          <CircularProgress color="default" aria-label="Loading..." />
        )}
        {movies &&
          movies.map((movie) => {
            if (movie.Poster == "N/A") return;
            return (
              <Card
                className="w-200px max-h-[430px] min-h-[430px] min-w-[300px]"
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
                <CardFooter className="bg-black absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white/10">
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
