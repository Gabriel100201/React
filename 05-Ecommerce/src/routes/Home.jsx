import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Offer } from "../components/Offer";
import { Latest } from "../components/Latest";

export const Home = () => {
  return (
    <div className="w-full bg-primary-100 myTheme">
      <Header></Header>
      <Banner></Banner>
      <Offer></Offer>
      <Latest></Latest>
    </div>
  );
};
