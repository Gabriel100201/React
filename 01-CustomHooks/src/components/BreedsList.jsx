import { useEffect, useState } from "react";
import { useBreeds } from "../hooks/useBreeds";
import { DOG_IMAGE_BY_BREED_ENDPOINT } from "../constants/api";

export const BreedsList = () => {
  const [breedSelected, setbreedSelected] = useState("Esperando selección");
  const [dogImageUrl, setDogImageUrl] = useState("");
  const breeds = useBreeds();

  const hanldeBreedSelected = (ev) => {
    setbreedSelected(ev.target.value);
  };

  useEffect(() => {
    if (breedSelected == "Esperando selección") return;
    fetch(DOG_IMAGE_BY_BREED_ENDPOINT(breedSelected))
      .then((res) => res.json())
      .then((res) => setDogImageUrl(res.message[0]));
  }, [breedSelected]);

  return (
    <>
      <section className="flex w-full items-center justify-center gap-12 bg-slate-800 px-32 py-20">
        <div>
          <select
            onChange={hanldeBreedSelected}
            className="rounded-lg bg-slate-200 px-5 py-3 text-center"
            name="breedSelect"
            id="breedId"
          >
            <option value={null}>Razas</option>
            {breeds &&
              breeds.map((breed, index) => {
                return (
                  <option
                    value={breed}
                    className="w-full text-center"
                    key={index}
                  >
                    {breed}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="flex h-20 w-1/5 items-center justify-center rounded-lg bg-slate-200">
          {breedSelected && (
            <span className="text-xl font-bold text-slate-800">
              {breedSelected.toUpperCase()}
            </span>
          )}
        </div>
      </section>

      <section className="full flex h-[900px] justify-center bg-slate-500">
        {dogImageUrl && (
          <div className="mt-20 w-1/3">
            <img
              className="w-full rounded-xl"
              src={dogImageUrl}
              alt={breedSelected}
            />
          </div>
        )}
      </section>
    </>
  );
};
