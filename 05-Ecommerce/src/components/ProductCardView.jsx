import { useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart";

export const ProductCardView = () => {
  let { state } = useLocation();
  const { addToCart } = useContext(CartContext);
  const [countToAdd, setCountToAdd] = useState(1);

  const handleCartClick = () => {
    addToCart(state, countToAdd);
  };

  const handleInput = (ev) => {
    let value = ev.target.value.trim();
    value = value === "" ? 1 : parseInt(value);
    if (value <= 0) value = 1;
    setCountToAdd(parseInt(value));
  };

  return (
    <section className="flex flex-wrap justify-center gap-3 bg-primary-100 px-64 py-20">
      <div className="flex h-[500px] min-w-fit grow items-center justify-center gap-4 py-5">
        <img
          className="h-full rounded-lg bg-gray-300"
          src={state.imageUrl}
          alt={state.name}
        />
        <div className="flex h-full min-w-fit flex-col justify-between">
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
      <div className="flex h-[500px] w-2/5 grow flex-col items-start justify-between gap-3 rounded-lg bg-gray-100 p-12">
        <div className="flex flex-col gap-2">
          <h3 className="mb-2 text-3xl font-semibold text-primary-900">
            {state.name}
          </h3>
          <h4 className="text-xl font-semibold text-gray-600">
            Stock Disponible
          </h4>
          <span className="text-3xl font-semibold text-primary-900">
            ${state.price}
          </span>
          <div className="flex items-center gap-3">
            <Rating readOnly value={4}></Rating>
            <span>10 opiniones</span>
          </div>
          <p className="text-lg text-primary-900">{state.description}</p>
        </div>
        <div className="mt-5 flex w-full items-center justify-between">
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="" className="text-gray-600">
              Cantidad
            </label>
            <input
              onChange={handleInput}
              className="w-20 rounded-xl"
              type="number"
            />
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleCartClick}
              className="rounded-full bg-primary-600 p-2 text-lg font-semibold text-primary-50"
            >
              <CiShoppingCart className="text-3xl"></CiShoppingCart>
            </button>
            <button className="w-32 rounded-xl bg-green-600 px-4 py-2 text-lg font-semibold text-primary-50">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
