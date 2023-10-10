import { DOG_IMAGE_BY_BREED_ENDPOINT } from "../constants/api";

export const imgByBreed = (breedSelected, cant) => {
    return fetch(DOG_IMAGE_BY_BREED_ENDPOINT(breedSelected))
        .then((res) => res.json())
        .then((res) => {
            const urls = [];
            for (let i = 0; i < cant; i++) {
                const randomIndex = Math.floor(Math.random() * res.message.length);
                urls.push(res.message[randomIndex])
            }
            console.log(urls)
            return urls
        })
        .catch(() => {
            return null
        })
}