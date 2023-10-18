import { useCallback } from "react";
import "../styles/movies.css";
import debounce from "just-debounce-it";
import { Input, CircularProgress } from "@nextui-org/react";

export const InputContainer = ({
  title,
  setTitle,
  getMovies,
  error,
  loading,
}) => {
  const debouncedGetMovies = useCallback(
    debounce((title) => {
      getMovies({ title });
    }, 400),
    [setTitle],
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setTitle(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <form className="flex w-full flex-col items-center justify-center gap-3">
      <div className="relative flex w-72 items-center justify-center gap-5">
        <Input
          color="secondary"
          size="lg"
          type="text"
          label="Movie"
          value={title}
          onChange={handleChange}
          className="w-full"
        />
        <div className="absolute right-0 w-12 items-center justify-center ">
          {loading && (
            <CircularProgress color="secondary" aria-label="Loading..." />
          )}
        </div>
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </form>
  );
};
