import { useEffect, useState } from "react";
import { getBreeds } from "../services/breeds";

export function useBreeds() {
    const [breeds, setBreeds] = useState(null);
    useEffect(() => {
        getBreeds()
            .then((res) => {
                setBreeds(res)
            })
            .catch((err) => console.log(err))
    }, [])
    return breeds;
}