import { Filters } from "../components/Filters";
import { AllProducts } from "../components/AllProducts";
import { Footer } from "../components/Footer";
import { OpenFilters } from "../components/OpenFilters";

export const All = () => {
  return (
    <div className="w-full bg-primary-100 myTheme">
      <section className="flex flex-col sm:flex-row h-full justify-between">
        <OpenFilters></OpenFilters>
        <section className="sm:flex hidden w-full sm:w-2/5 lg:w-1/5 flex-col items-center justify-start gap-5 sm:gap-12 bg-primary-50 px-5 py-12">
          <Filters></Filters>
        </section>
        <AllProducts></AllProducts>
      </section>
      <Footer></Footer>
    </div>
  );
};
