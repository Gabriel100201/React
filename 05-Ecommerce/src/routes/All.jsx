import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { AllProducts } from "../components/AllProducts";
import { Footer } from "../components/Footer";
import { FiltersProvider } from "../context/filters";

export const All = () => {
  return (
    <FiltersProvider>
      <div className="w-full bg-primary-100 myTheme">
        <section className="flex h-full justify-between">
          <Filters></Filters>
          <AllProducts></AllProducts>
        </section>
        <Footer></Footer>
      </div>
    </FiltersProvider>
  );
};
