import { useEffect, useState } from "react";
import { DOG_IMAGE_BY_BREED_ENDPOINT } from "../constants/api";

export function useDogImage({ breedSelected }) {
    const [dogImageUrl, setDogImageUrl] = useState("");

    useEffect(() => {
        if (breedSelected == null) return;
        fetch(DOG_IMAGE_BY_BREED_ENDPOINT(breedSelected))
            .then((res) => res.json())
            .then((res) => {
                const randomIndex = Math.floor(Math.random() * res.message.length);
                setDogImageUrl(res.message[randomIndex]);
            })
            .catch((err) => console.log(err))
    }, [breedSelected]);
    return dogImageUrl
}