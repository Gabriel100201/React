export const Filters = () => {
  return (
    <section className="flex w-1/5 flex-col items-center justify-start gap-12 bg-primary-50 px-5 py-20">
      <div className="flex flex-col items-center justify-center">
        <span className="text-lg">Precio Máximo</span>
        <input type="range" />
        <label htmlFor="price" className="text-lg">
          $1000
        </label>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 px-12">
        <span className="mb-5 text-lg">Filtros por categoría</span>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Mundiales">
            Mundiales
          </label>
          <input type="checkbox" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Argentina">
            Argentina
          </label>
          <input type="checkbox" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Premier">
            Premier
          </label>
          <input type="checkbox" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Bundesliga">
            Bundesliga
          </label>
          <input type="checkbox" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Serie A">
            Seria A
          </label>
          <input type="checkbox" />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="La Liga">
            La Liga
          </label>
          <input type="checkbox" />
        </div>
      </div>
    </section>
  );
};
