import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { All } from "./routes/All";
import { ProductView } from "./routes/ProductView";
import { CartProvider } from "./context/cart";
import { FiltersProvider } from "./context/filters.jsx";
import { NavbarMobile } from "./components/NavbarMobile.jsx";
import { useEffect } from "react";
import { Footer } from "./components/Footer.jsx"
import { Login } from "./routes/Login.jsx";
import { ProtectedView } from "./components/ProtectedView.jsx";
import { LoginProvider } from "./context/login.jsx";
import { Toaster } from "sonner";

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
        <LoginProvider>
          <NextUIProvider>
            <Toaster richColors />
            <ScrollToTop></ScrollToTop>
            <NavbarMobile></NavbarMobile>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="all" element={
                <ProtectedView>
                  <All />
                </ProtectedView>
              }></Route>
              <Route path="products/:infoProduct" element={<ProductView />}></Route>
              <Route path="login" element={<Login />}></Route>
            </Routes>
            <Footer></Footer>
          </NextUIProvider>
        </LoginProvider>
      </FiltersProvider>
    </CartProvider>
  );
};

export default App;
