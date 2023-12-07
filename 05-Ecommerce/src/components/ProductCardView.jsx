import { Link, useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { CiShoppingCart } from "react-icons/ci";
import { useContext, useState } from "react";
import { CartContext } from "../context/cart";
import { phoneNumber } from "../constants/infoBuy";
import { LoginContext } from "../context/login";
import { useSearchProduct } from "../hooks/useSearchProduct";

export const ProductCardView = () => {
  const navigate = useNavigate();
  const { productInfo } = useSearchProduct();
  const { addToCart } = useContext(CartContext);
  const [countToAdd, setCountToAdd] = useState(1);
  const { isLogged } = useContext(LoginContext);

  const handleCartClick = () => {
    if (!isLogged) {
      navigate("/login");
    } else {
      addToCart(productInfo, countToAdd);
    }
  };

  const handleInput = (ev) => {
    console.log(ev);
    let value = ev.target.value.trim();
    value = value === "" ? 1 : parseInt(value);
    if (value <= 0) value = 1;
    setCountToAdd(parseInt(value));
  };

  return (
    <section className="body-font overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="mx-auto flex flex-wrap lg:w-4/5">
          <img
            alt={productInfo.name}
            className="h-64 w-full rounded object-cover object-center lg:h-auto lg:w-1/2"
            src={productInfo.imageUrl}
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <h2 className="title-font text-sm tracking-widest text-gray-500">
              Ball Shop
            </h2>
            <h1 className="title-font mb-1 text-3xl font-medium text-gray-900">
              {productInfo.name}
            </h1>
            <div className="mb-4 flex">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3 text-gray-600">4 Reviews</span>
              </span>
              <span className="space-x-2s ml-3 flex border-l-2 border-gray-200 py-2 pl-3">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">{productInfo.description}</p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              <div className="flex">
                <span className="mr-3">Tamaño</span>
                <button className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-primary-200 font-semibold text-primary-700 focus:outline-none">
                  S
                </button>
                <button className="ml-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-primary-200 font-semibold text-primary-700 focus:outline-none">
                  M
                </button>
                <button className="ml-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-primary-200 font-semibold text-primary-700 focus:outline-none">
                  L
                </button>
              </div>
              <div className="ml-6 flex items-center">
                <span className="mr-3">Cantidad</span>
                <div className="relative">
                  <select
                    onChange={handleInput}
                    className="appearance-none rounded border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font text-2xl font-medium text-gray-900">
                $
                {productInfo.price -
                  productInfo.price * (productInfo.off / 100)}
              </span>
              {productInfo.off > 0 && (
                <span className="ml-2 text-green-500">-{productInfo.off}%</span>
              )}
              <Link
                className="ml-auto"
                to={`https://wa.me/${phoneNumber}?text=Estoy interesado en: ${productInfo.name}`}
              >
                <button className="flex rounded border-0 bg-primary-500 px-6 py-2 text-white hover:bg-primary-600 focus:outline-none">
                  Comprar
                </button>
              </Link>
              <button
                onClick={handleCartClick}
                className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500"
              >
                <CiShoppingCart className="text-2xl text-black"></CiShoppingCart>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* <section className="flex flex-wrap justify-center gap-3 bg-primary-100 px-10 lg:px-56 py-10 sm:py-20">
      <div className="flex flex-col mt-24 sm:mt-0 sm:flex-row h-[300px] sm:h-[500px] min-w-fit grow items-center justify-center gap-4 py-0">
        <img
          className="h-full rounded-lg bg-gray-300"
          src={productInfo.imageUrl}
          alt={productInfo.name}
        />
        <div className="flex h-full min-w-fit sm:flex-col flex-row gap-1 sm:gap-0 justify-between">
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={productInfo.imageUrl}
            alt={productInfo.name}
          />
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={productInfo.imageUrl}
            alt={productInfo.name}
          />
          <img
            className="h-[33%] w-full rounded-lg bg-gray-300 object-contain hover:opacity-70"
            src={productInfo.imageUrl}
            alt={productInfo.name}
          />
        </div>
      </div>
      <div className="flex h-[400px] lg:h-[500px] w-2/5 min-w-[300px] max-w-[600px] grow flex-col items-start justify-between gap-3 rounded-lg bg-gray-100 p-7 lg:p-12">
        <div className="flex flex-col gap-2 text-center lg:text-start">
          <h3 className="mb-2 text-xl lg:text-3xl font-semibold text-primary-900">
            {productInfo.name}
          </h3>
          <h4 className="lg:text-xl text-md font-semibold text-gray-600">
            Stock Disponible
          </h4>
          <span className="lg:text-3xl text-xl font-semibold text-primary-900">
            ${productInfo.price}
          </span>
          <div className="flex flex-col lg:flex-row items-center gap-1 sm:gap-3">
            <Rating readOnly value={4}></Rating>
            <span>10 opiniones</span>
          </div>
          <p className="lg:text-lg text-md text-primary-900">{productInfo.description}</p>
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
            <Link to={`https://wa.me/${phoneNumber}?text=Estoy interesado en: ${productInfo.name}`}>
              <button className="w-32 active:bg-green-400 hover:bg-green-700 rounded-xl bg-green-600 px-4 py-2 text-lg font-semibold text-primary-50">
                Comprar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section> */
}
