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
    <form className="flex w-full items-center justify-center">
      <Input
        color="secondary"
        className="w-72"
        size="lg"
        type="text"
        label="Movie"
        isInvalid={error}
        errorMessage={error}
        value={title}
        onChange={handleChange}
      />
    </form>
  );
};
