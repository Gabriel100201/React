import { useContext, useEffect } from "react";
import { filtersContext } from "../context/filters";
import { useLocation } from "react-router-dom";

export const Filters = () => {
  const { filters, updateFilters } = useContext(filtersContext);
  let { state } = useLocation();
  
  const initialOffersState = state?.offers === true ? true : filters.offers;

  useEffect(() => {
    if (initialOffersState == true) {
      console.log("INITIAL STATE TRUE")
      updateFilters("offers", true)
      }
  },[])

  const handleCheckBox = (ev) => {
    const filterToUpdate = ev.target.value;
    const valueToFilter = ev.target.checked ? true : false;
    updateFilters(filterToUpdate, valueToFilter);
  };
  
  return (
    <section className="flex w-1/5 flex-col items-center justify-start gap-12 bg-primary-50 px-5 py-20">
      <div className="flex flex-col items-center justify-center">
        <span className="text-md">Precio Máximo</span>
        <input type="range" min="0" max="100000" step="100" />
        <label htmlFor="price" className="text-md">
          $1000
        </label>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-1 px-12">
        <span className="text-md mb-5 text-center text-lg">Categorías</span>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Mundiales">
            Mundiales
          </label>
          <input
            onChange={handleCheckBox}
            checked={filters.mundiales}
            value={"mundiales"}
            type="checkbox"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Argentina">
            Argentina
          </label>
          <input
            onChange={handleCheckBox}
            checked={filters.argentina}
            value={"argentina"}
            type="checkbox"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Premier">
            Premier
          </label>
          <input
            checked={filters.premier}
            onChange={handleCheckBox}
            value={"premier"}
            type="checkbox"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Bundesliga">
            Bundesliga
          </label>
          <input
            onChange={handleCheckBox}
            checked={filters.bundesliga}
            value={"bundesliga"}
            type="checkbox"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="Serie A">
            Seria A
          </label>
          <input
            onChange={handleCheckBox}
            checked={filters.serieA}
            value={"serieA"}
            type="checkbox"
          />
        </div>
        <div className="flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="La Liga">
            La Liga
          </label>
          <input
            value={"laLiga"}
            checked={filters.laLiga}
            onChange={handleCheckBox}
            type="checkbox"
          />
        </div>
        <div className="mt-10 flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="La Liga">
            Ofertas
          </label>
          <input
            type="checkbox"
            value={"offers"}
            checked={filters.offers}
            onChange={handleCheckBox}
            className="checked:bg-green-600"
          />
        </div>
        <div className="mt-1 flex w-full items-center justify-between">
          <label className="font-semibold" htmlFor="La Liga">
            Envio Gratis
          </label>
          <input
            value={"freeSend"}
            checked={filters.freeSend}
            onChange={handleCheckBox}
            type="checkbox"
            className="checked:bg-green-600"
          />
        </div>
      </div>
    </section>
  );
};
