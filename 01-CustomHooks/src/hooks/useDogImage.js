import { useEffect, useState } from "react";
import { imgByBreed } from "../services/imgByBreed";

export function useDogImage({ breedSelected }) {
    const [dogImageUrl, setDogImageUrl] = useState("");

    useEffect(() => {
        if (breedSelected == null) return;
        imgByBreed(breedSelected)
            .then((res) => setDogImageUrl(res))
            .catch((err) => console.log(err))
    }, [breedSelected]);
    return dogImageUrl
}