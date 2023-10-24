import { useContext } from "react";
import {
  Routes,
  Route,
  Outlet,
  useParams,
  useLocation,
  Navigate,
  Link,
} from "react-router-dom";
import { LoginContext } from "./context/login";

function Home() {
  const { login } = useContext(LoginContext);
  return (
    <div className="flex flex-col">
      <h2>Bienvenido a la tienda</h2>
      <button onClick={login}>Login</button>
      <Link to="/auth">Redirect</Link>
    </div>
  );
}

function Products() {
  return (
    <div>
      <h2>Productos</h2>
      <Outlet /> {/* Renderiza componentes anidados */}
    </div>
  );
}

function ProductList() {
  return (
    <div>
      <p>Lista de productos aquí:</p>
      <Outlet></Outlet>
    </div>
  );
}

function ProductDetail() {
  const { id } = useParams();
  return <p>Detalles del producto: {id}</p>;
}

function ProtectedRoute({ children }) {
  const { isAuth } = useContext(LoginContext);
  console.log(isAuth);
  if (!isAuth) {
    return <Navigate to="/"></Navigate>;
  }
  return <div>{children}</div>;
}

export const App = () => {
  return (
    <div>
      <h1>Mi Tienda en Línea</h1>
      <Routes>
        <Route
          path="auth"
          element={
            <ProtectedRoute>
              <h1>Login exitoso</h1>
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/" element={<Home />} />
        <Route path="products/:name" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
};
