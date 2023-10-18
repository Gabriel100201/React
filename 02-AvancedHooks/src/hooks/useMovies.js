import { useRef, useState } from "react";
import { API_URL } from "../constants/API";
import { goOutCard } from "../animations/card";

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousTitle = useRef("");

  const getMovies = ({ title }) => {
    if (previousTitle.current == title) return
    setError(null)
    if (title === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (title.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (title.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setLoading(true)
    previousTitle.current = title;
    const url = API_URL(title);
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (!res.Search) {
          setError("No se encontro ninguna pelicula")
          return
        }
        setTimeout(() => {
          setMovies(res.Search);
        }, 400);
        goOutCard()
      })
      .catch(() => {
        setError("Error al encontrar la pagina de busqueda")
      })
      .finally(() => {
        setLoading(false)
      })
  };
  return { movies, getMovies, loading, error };
};
