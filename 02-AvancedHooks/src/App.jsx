import { useState } from "react";
import { InputContainer } from "./components/InputContainer";
import { MoviesContainer } from "./components/MoviesContainer";
import { useMovies } from "./hooks/useMovies";

function App() {
  const [title, setTitle] = useState("");
  const { movies, getMovies, loading, error } = useMovies();

  return (
    <>
      <div className="min-h-[100vh] w-full bg-gradient-to-b from-primary-950 to-primary-700 pt-20">
        <InputContainer
          title={title}
          setTitle={setTitle}
          getMovies={getMovies}
          error={error}
          loading={loading}
        ></InputContainer>
        <MoviesContainer movies={movies} error={error}></MoviesContainer>
      </div>
    </>
  );
}

export default App;
