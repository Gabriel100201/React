import { DOG_BREEDS_ENDPOINT } from "../constants/api";

export const getBreeds = () => {
    return fetch(DOG_BREEDS_ENDPOINT)
        .then((res) => res.json())
        .then((data) => {
            const breedNames = Object.keys(data.message);
            return breedNames
        });
}