import { useCallback, useEffect, useRef, useState } from "react";
import "../styles/movies.css";
import debounce from "just-debounce-it";
import {
  Input,
  CircularProgress,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";

export const InputContainer = ({
  title,
  setTitle,
  getMovies,
  error,
  loading,
}) => {
  const prevSearch = useRef("all");

  const [selectValue, setSelect] = useState("all");

  const debouncedGetMovies = useCallback(
    debounce((title) => {
      getMovies({ title, checks: prevSearch.current });
    }, 400),
    [setTitle],
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setTitle(newSearch);
    debouncedGetMovies(newSearch);
  };

  const handleCheck = (checks) => {
    if (checks == undefined || checks[1] == undefined) return;
    let newChecks = checks;
    if (newChecks instanceof Array) {
      newChecks = newChecks[1];
    }
    setSelect(newChecks);
    prevSearch.current = newChecks;
    console.log("Ultima busqueda: ", prevSearch);
    getMovies({ title, checks: prevSearch.current });
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
      <CheckboxGroup
        onChange={handleCheck}
        color="default"
        className="mt-5"
        orientation="horizontal"
        defaultValue={[selectValue]}
        value={[selectValue]}
      >
        <Checkbox value="all">
          <span className="text-secondary-50">All</span>
        </Checkbox>
        <Checkbox value="movie">
          <span className="text-secondary-50">Movie</span>
        </Checkbox>
        <Checkbox value="series">
          <span className="text-secondary-50">Serie</span>
        </Checkbox>
      </CheckboxGroup>
      {error && <span className="text-red-500">{error}</span>}
    </form>
  );
};
