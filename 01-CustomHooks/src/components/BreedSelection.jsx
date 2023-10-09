export const BreedSelection = ({
  breedSelected,
  breeds,
  hanldeBreedSelected,
  defaultWord,
}) => {
  const BreedSelectedColor = breedSelected ? "bg-slate-200" : "bg-slate-600";
  return (
    <section className="flex w-full items-center justify-center gap-12 bg-slate-800 px-32 py-20">
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
    </section>
  );
};
