import { useEffect, useState } from "react";
import { imgByBreed } from "../services/imgByBreed";

export function useDogImage({ breedSelected, buttonSelected }) {
    const [dogImageUrl, setDogImageUrl] = useState(null);

    const loadImg = () => {
        if (breedSelected == null) return;
        imgByBreed(breedSelected, buttonSelected)
            .then((res) => {
                console.log(res)
                setDogImageUrl(res)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        loadImg()
    }, [breedSelected]);

    return { dogImageUrl, reloadImg: loadImg }
}