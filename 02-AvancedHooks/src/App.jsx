import { useState } from "react";
import { InputContainer } from "./components/InputContainer";
import { MoviesContainer } from "./components/MoviesContainer";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [title, setTitle] = useState("");
  const { movies, getMovies, loading, error } = useMovies();
  return (
    <>
      <div className="h-[1400px] w-full bg-primary-900 pt-20">
        <InputContainer
          title={title}
          setTitle={setTitle}
          getMovies={getMovies}
          error={error}
        ></InputContainer>
        <MoviesContainer
          movies={movies}
          loading={loading}
          error={error}
        ></MoviesContainer>
      </div>
    </>
  );
}

export default App;
