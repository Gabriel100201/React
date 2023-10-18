import { useCallback } from "react";
import "../styles/movies.css";
import debounce from "just-debounce-it";
import { Input } from "@nextui-org/react";

export const InputContainer = ({ title, setTitle, getMovies, error }) => {
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
      <Input
        color="secondary"
        className="w-72"
        size="lg"
        type="text"
        label="Movie"
        value={title}
        onChange={handleChange}
      />
      {error && <span className="text-red-500">{error}</span>}
    </form>
  );
};
