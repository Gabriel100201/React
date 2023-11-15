import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { All } from "./routes/All";
import { ProductView } from "./routes/ProductView";

export const App = () => {
  return (
    <>
      <NextUIProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="all" element={<All />}></Route>
          <Route path="products/:infoProduct" element={<ProductView />}></Route>
        </Routes>
      </NextUIProvider>
    </>
  );
};

export default App;
