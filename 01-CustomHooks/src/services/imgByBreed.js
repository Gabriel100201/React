import { DOG_IMAGE_BY_BREED_ENDPOINT } from "../constants/api";

export const imgByBreed = (breedSelected) => {
    return fetch(DOG_IMAGE_BY_BREED_ENDPOINT(breedSelected))
        .then((res) => res.json())
        .then((res) => {
            const randomIndex = Math.floor(Math.random() * res.message.length);
            const urlImage = res.message[randomIndex];
            return urlImage
        })
        .catch(() => {
            return null
        })
}