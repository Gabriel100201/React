import { useLocation } from "react-router-dom";
import { Header } from "../components/Header";

export const ProductView = () => {
  let { state } = useLocation();
  console.log(state);
  return (
    <div className="w-full bg-primary-100 myTheme">
      <Header></Header>
      <section className="flex justify-center bg-primary-100 px-80 py-20">
        <div className="flex h-[530px] w-full items-center justify-center gap-4">
          <img
            className="h-full bg-gray-300"
            src={state.imageUrl}
            alt={state.name}
          />
          <div className="flex h-full flex-col justify-between">
            <img
              className="max-h-[33%] w-full bg-gray-300 object-contain hover:opacity-70"
              src={state.imageUrl}
              alt={state.name}
            />
            <img
              className="max-h-[33%] w-full bg-gray-300 object-contain hover:opacity-70"
              src={state.imageUrl}
              alt={state.name}
            />
            <img
              className="max-h-[33%] w-full bg-gray-300 object-contain hover:opacity-70"
              src={state.imageUrl}
              alt={state.name}
            />
          </div>
        </div>
        <div className="h-full w-1/3 bg-gray-100">
          <h1>Hola</h1>
        </div>
      </section>
    </div>
  );
};
