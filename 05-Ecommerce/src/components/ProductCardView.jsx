import { Link, useLocation, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { phoneNumber } from "../constants/infoBuy";
import { LoginContext } from "../context/login";

export const ProductCardView = () => {
  const navigate = useNavigate()
  let { state } = useLocation();
  const { addToCart } = useContext(CartContext);
  const [countToAdd, setCountToAdd] = useState(1);
  const { isLogged } = useContext(LoginContext);

  const handleCartClick = () => {
    if (!isLogged) {
      navigate("/login")
    }
    else {
      addToCart(state, countToAdd);
    }
  };

  const handleInput = (ev) => {
    let value = ev.target.value.trim();
    value = value === "" ? 1 : parseInt(value);
    if (value <= 0) value = 1;
    setCountToAdd(parseInt(value));
  };

  return (
    <section className="flex flex-wrap justify-center gap-3 bg-primary-100 px-10 lg:px-56 py-10 sm:py-20">
      <div className="flex flex-col mt-24 sm:mt-0 sm:flex-row h-[300px] sm:h-[500px] min-w-fit grow items-center justify-center gap-4 py-0">
        <img
          className="h-full rounded-lg bg-gray-300"
          src={state.imageUrl}
          alt={state.name}
        />
        <div className="flex h-full min-w-fit sm:flex-col flex-row gap-1 sm:gap-0 justify-between">
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={state.imageUrl}
            alt={state.name}
          />
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={state.imageUrl}
            alt={state.name}
          />
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={state.imageUrl}
            alt={state.name}
          />
        </div>
      </div>
      <div className="flex h-[400px] lg:h-[500px] w-2/5 min-w-[300px] max-w-[600px] grow flex-col items-start justify-between gap-3 rounded-lg bg-gray-100 p-7 lg:p-12">
        <div className="flex flex-col gap-2 text-center lg:text-start">
          <h3 className="mb-2 text-xl lg:text-3xl font-semibold text-primary-900">
            {state.name}
          </h3>
          <h4 className="lg:text-xl text-md font-semibold text-gray-600">
            Stock Disponible
          </h4>
          <span className="lg:text-3xl text-xl font-semibold text-primary-900">
            ${state.price}
          </span>
          <div className="flex flex-col lg:flex-row items-center gap-1 sm:gap-3">
            <Rating readOnly value={4}></Rating>
            <span>10 opiniones</span>
          </div>
          <p className="lg:text-lg text-md text-primary-900">{state.description}</p>
        </div>
        <div className="mt-5 flex w-full items-end justify-between">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="" className="text-gray-600">
              Cantidad
            </label>
            <input
              onChange={handleInput}
              value={countToAdd}
              className="w-20 rounded-xl"
              type="number"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleCartClick}
              className="rounded-full active:bg-primary-400 hover:bg-primary-700 bg-primary-600 p-2 text-lg font-semibold text-primary-50"
            >
              <CiShoppingCart className="text-3xl"></CiShoppingCart>
            </button>
            <Link to={`https://wa.me/${phoneNumber}?text=Estoy interesado en: ${state.name}`}>
              <button className="w-32 active:bg-green-400 hover:bg-green-700 rounded-xl bg-green-600 px-4 py-2 text-lg font-semibold text-primary-50">
                Comprar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
