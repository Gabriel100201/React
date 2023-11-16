import { Header } from "../components/Header";
import { Filters } from "../components/Filters";
import { AllProducts } from "../components/AllProducts";
import { Footer } from "../components/Footer";

export const All = () => {
  return (
    <div className="w-full bg-primary-100 myTheme">
      <Header></Header>
      <section className="flex h-full justify-between">
        <Filters></Filters>
        <AllProducts></AllProducts>
      </section>
      <Footer></Footer>
    </div>
  );
};
