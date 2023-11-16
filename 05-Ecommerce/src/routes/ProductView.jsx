import { Header } from "../components/Header";
import { ProductCardView } from "../components/ProductCardView";

export const ProductView = () => {

  return (
    <div className="w-full bg-primary-100 myTheme">
      <Header></Header>
      <ProductCardView></ProductCardView>
    </div>
  );
};
