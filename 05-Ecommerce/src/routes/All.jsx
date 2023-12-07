import { Filters } from "../components/Filters";
import { AllProducts } from "../components/AllProducts";
import { OpenFilters } from "../components/OpenFilters";

export const All = () => {
  return (
    <div className="w-full bg-primary-100 myTheme">
      <section className="flex h-full flex-col justify-between sm:flex-row">
        <OpenFilters></OpenFilters>
        <section className="hidden w-full flex-col items-center justify-start gap-5 bg-primary-50 px-5 py-12 sm:flex sm:w-2/5 sm:gap-12 lg:w-1/5">
          <Filters></Filters>
        </section>
        <AllProducts></AllProducts>
      </section>
    </div>
  );
};
