import { DOG_IMAGE_BY_BREED_ENDPOINT } from "../constants/api";

function eliminarElementosRepetidos(arr) {
    return arr.filter((valor, indice, self) => self.indexOf(valor) === indice);
}

export const imgByBreed = (breedSelected, cant) => {
    const urls = [];
    return fetch(DOG_IMAGE_BY_BREED_ENDPOINT(breedSelected))
        .then((res) => res.json())
        .then((res) => {
            const uniqueUrls = eliminarElementosRepetidos(res.message);
            while (urls.length < cant) {
                const randomIndex = Math.floor(Math.random() * uniqueUrls.length);
                urls.push(uniqueUrls[randomIndex]);
                uniqueUrls.splice(randomIndex, 1);
            }
            return urls;
        })
        .catch(() => {
            return null;
        });
}
