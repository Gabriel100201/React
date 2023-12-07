import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import { All } from "./routes/All";
import { ProductView } from "./routes/ProductView";
import { CartProvider } from "./context/cart";
import { FiltersProvider } from "./context/filters.jsx";
import { NavbarMobile } from "./components/NavbarMobile.jsx";
import { useContext, useEffect } from "react";
import { Footer } from "./components/Footer.jsx";
import { Login } from "./routes/Login.jsx";
import { ProtectedView } from "./components/ProtectedView.jsx";
import { LoginContext } from "./context/login.jsx";
import { Toaster } from "sonner";
import { Profile } from "./routes/Profile.jsx";

export const App = () => {
  const { isLogged } = useContext(LoginContext);

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
          <Toaster richColors />
          <ScrollToTop></ScrollToTop>
          <NavbarMobile></NavbarMobile>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="all"
              element={
                <ProtectedView>
                  <All />
                </ProtectedView>
              }
            ></Route>
            <Route
              path="products/:infoProduct"
              element={<ProductView />}
            ></Route>
            {isLogged && <Route path="login" element={<Profile />}></Route>}
            {!isLogged && <Route path="login" element={<Login />}></Route>}
          </Routes>
          <Footer></Footer>
        </NextUIProvider>
      </FiltersProvider>
    </CartProvider>
  );
};

export default App;
