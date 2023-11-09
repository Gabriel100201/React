import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";
import { Offer } from "./components/Offers";
export const App = () => {
  return (
    <>
      <NextUIProvider>
        <div className="w-full bg-primary-100 myTheme">
          <Header></Header>
          <Banner></Banner>
          <Offer></Offer>
        </div>
      </NextUIProvider>
    </>
  );
};

export default App;
