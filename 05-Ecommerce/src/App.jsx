import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { All } from "./routes/All";
import { ProductView } from "./routes/ProductView";
import { CartProvider } from "./context/cart"; // Usando CartProvider con mayúscula al inicio
import { FiltersProvider } from "./context/filters.jsx";
import { NavbarMobile } from "./components/NavbarMobile.jsx";
import { useEffect } from "react";

export const App = () => {
  //Función que se ejecuta cada vez que se cambia el path
  // Sirve para reiniciar el scroll
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <CartProvider>
      <FiltersProvider>
        <NextUIProvider>
          <NavbarMobile></NavbarMobile>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="all" element={<All />}></Route>
            <Route path="products/:infoProduct" element={<ProductView />}></Route>
          </Routes>
        </NextUIProvider>
      </FiltersProvider>
    </CartProvider>
  );
};

export default App;
