export const DogImageContainer = ({ dogImageUrl, breedSelected }) => {
  return (
    <section className="full flex h-[900px] justify-center gap-5 bg-slate-500 py-32">
      {dogImageUrl &&
        dogImageUrl.map((url, index) => {
          return (
            <div key={url + index} className="h-[500px] w-[500px]">
              <img
                className="h-full w-full rounded-xl"
                src={url}
                alt={breedSelected}
              />
            </div>
          );
        })}
    </section>
  );
};
