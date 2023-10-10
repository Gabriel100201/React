import { useState } from "react";
import { useBreeds } from "../hooks/useBreeds";
import { useDogImage } from "../hooks/useDogImage";
import { DogImageContainer } from "./DogImageContainer";
import { BreedSelection } from "./BreedSelection";

export const BreedsList = () => {
  const defaultWord = "Razas";
  const breeds = useBreeds();
  const [breedSelected, setbreedSelected] = useState(null);
  const [buttonSelected, setButtonSelected] = useState(1);
  const { dogImageUrl, reloadImg } = useDogImage({
    breedSelected,
    buttonSelected,
  });
  const hanldeBreedSelected = (ev) => {
    if (ev.target.value != defaultWord) setbreedSelected(ev.target.value);
  };

  return (
    <>
      <div className="w-full">
        <BreedSelection
          setButtonSelected={setButtonSelected}
          buttonSelected={buttonSelected}
          defaultWord={defaultWord}
          breedSelected={breedSelected}
          breeds={breeds}
          hanldeBreedSelected={hanldeBreedSelected}
          reloadImg={reloadImg}
        ></BreedSelection>
        <DogImageContainer
          dogImageUrl={dogImageUrl}
          breedSelected={breedSelected}
        ></DogImageContainer>
      </div>
    </>
  );
};
