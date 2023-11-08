import { Header } from "./components/Header";
import { NextUIProvider } from "@nextui-org/react";

export const App = () => {
  return (
    <>
      <div className="w-full bg-orange-400">
        <NextUIProvider>
          <Header></Header>
        </NextUIProvider>
      </div>
    </>
  );
};

export default App;
