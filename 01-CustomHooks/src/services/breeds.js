import { DOG_BREEDS_ENDPOINT } from "../constants/api";

export const getBreeds = () => {
    return fetch(DOG_BREEDS_ENDPOINT)
        .then((res) => {
            if (!res.ok) throw new Error("Fallo en la respuesta")
            return res.json()
        })
        .then((data) => {
            const breedNames = Object.keys(data.message);
            return breedNames
        })
        .catch(() => {
            return null
        })
}