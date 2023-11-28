import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductCardView } from "../components/ProductCardView";

export const ProductView = () => {
  return (
    <div className="w-full bg-primary-100 myTheme">
      <ProductCardView></ProductCardView>
      <Footer></Footer>
    </div>
  );
};
