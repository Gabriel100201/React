import { Banner } from "../components/Banner";
import { Offer } from "../components/Offer";
import { Latest } from "../components/Latest";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
      <div className="w-full bg-primary-100 myTheme">
        <Banner></Banner>
        <Offer></Offer>
        <Latest></Latest>
        <Footer></Footer>
      </div>
  );
};
