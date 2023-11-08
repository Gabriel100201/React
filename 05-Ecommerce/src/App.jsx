import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";
export const App = () => {
  return (
    <>
      <NextUIProvider>
        <div className="myTheme w-full bg-gray-900">
          <Header></Header>
          <Banner></Banner>
        </div>
      </NextUIProvider>
    </>
  );
};

export default App;
