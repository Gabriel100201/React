import { useState } from "react";
import refresh from "../assets/refresh.png";
export const BreedSelection = ({
  setButtonSelected,
  buttonSelected,
  breedSelected,
  breeds,
  hanldeBreedSelected,
  defaultWord,
  reloadImg,
}) => {
  const [word, setWord] = useState("");
  const BreedSelectedColor = breedSelected ? "bg-slate-200" : "bg-slate-600";

  const handleButton = (ev) => {
    const selectedValue = parseInt(ev.target.value);
    setButtonSelected(selectedValue);
  };
  const hanldeWord = (ev) => {
    const value = ev.target.value;
    setWord(value);
  };

  return (
    <>
      <section className="flex w-full flex-wrap items-center justify-center gap-12 bg-slate-800 px-32 py-20">
<<<<<<< HEAD
=======
        <div className="flex w-full justify-center">
          <form className="flex w-80 justify-center">
            <input type="text" className="h-10 w-full rounded-lg px-5" />
          </form>
        </div>
>>>>>>> cd0c9b48c536c5757b22549b104e63bde6dc5c77
        <div>
          <select
            onChange={hanldeBreedSelected}
            className="rounded-lg bg-slate-200 px-5 py-3 text-center"
            name="breedSelect"
            id="breedId"
          >
            <option value={null}>{defaultWord}</option>
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

        <div
          className={`flex h-20 w-1/5 items-center justify-center rounded-lg ${BreedSelectedColor}`}
        >
          {breedSelected ? (
            <span className="text-xl font-bold text-slate-800">
              {breedSelected.toUpperCase()}
            </span>
          ) : (
            <span className="text-xl font-bold text-slate-800">
              Seleccione una raza
            </span>
          )}
        </div>

        <div>
          <button
            onClick={reloadImg}
            className="h-12 w-12 rounded-full bg-slate-400 p-1 hover:bg-slate-300"
          >
            <img
              className="opacity-700 hover:opacity-100"
              src={refresh}
              alt="refresh button"
            />
          </button>
        </div>
      </section>
      <section className="flex items-center justify-center gap-5 bg-slate-800 pb-12">
        <button
          onClick={handleButton}
          value={1}
          className={`h-7 w-10 rounded-lg text-center font-semibold ${
            buttonSelected === 1 ? "bg-slate-200" : "bg-slate-500"
          }`}
        >
          1
        </button>
        <button
          onClick={handleButton}
          value={2}
          className={`h-7 w-10 rounded-lg text-center font-semibold ${
            buttonSelected === 2 ? "bg-slate-200" : "bg-slate-500"
          }`}
        >
          2
        </button>
        <button
          onClick={handleButton}
          value={3}
          className={`h-7 w-10 rounded-lg text-center font-semibold ${
            buttonSelected === 3 ? "bg-slate-200" : "bg-slate-500"
          }`}
        >
          3
        </button>
      </section>
    </>
  );
};
