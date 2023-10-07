export const DogImageContainer = ({ dogImageUrl, breedSelected }) => {
  return (
    <section className="full flex h-[900px] justify-center bg-slate-500 py-32">
      {dogImageUrl && (
        <div className="h-[500px] w-[500px]">
          <img
            className="h-full w-full rounded-xl"
            src={dogImageUrl}
            alt={breedSelected}
          />
        </div>
      )}
    </section>
  );
};
