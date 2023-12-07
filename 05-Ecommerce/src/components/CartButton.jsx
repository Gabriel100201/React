import { FaRegTrashAlt } from "react-icons/fa";
import EmptyBag from "../assets/bag-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { phoneNumber } from "../constants/infoBuy";
import { PopoverContent, PopoverTrigger, Popover } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart";

export const CartButton = ({ children, text }) => {
  const { cart, removeToCart } = useContext(CartContext);
  const [popAvtive, setPopActive] = useState(false);
  const [isCartAlert, setIsCartAlert] = useState(false);

  useEffect(() => {
    setIsCartAlert(true);
    setTimeout(() => {
      setIsCartAlert(false);
    }, 300);
  }, [cart]);

  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };

  const hanndleRemove = (ev) => {
    const productId = ev.currentTarget.dataset.id;
    removeToCart(productId);
  };

  return (
    <div className="relative">
      <Popover placement="bottom" showArrow={true}>
        <PopoverTrigger>
          <button
            onClick={handleLeave}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className={`flex items-center justify-center rounded-full p-2 hover:bg-primary-200 ${isCartAlert ? "bg-green-100" : ""
              }`}
          >
            {children}
          </button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex w-64 flex-col items-center justify-center gap-5 px-1 py-2">
            {cart &&
              cart.length > 0 &&
              cart.map((product) => {
                return (
                  <div
                    key={product.name}
                    className="flex w-full cursor-pointer justify-between rounded-lg border-2 p-1 hover:border-primary-900/30"
                  >
                    <div className="flex w-full flex-col gap-1 px-3">
                      <div className="flex w-full justify-between">
                        <span className="font-bold">{product.name}</span>
                        <span className="text-sm font-bold text-green-600">
                          ${product.price}
                        </span>
                      </div>
                      <div className="flex w-full justify-between">
                        <span>Cantidad: {product.count}</span>
                        <button data-id={product.name} onClick={hanndleRemove}>
                          <FaRegTrashAlt />
                        </button>
                      </div>
                    </div>
                    <div className="flex w-16 items-center justify-center">
                      <img
                        className="w-full"
                        src={product.imageUrl}
                        alt={product.name}
                      />
                    </div>
                  </div>
                );
              })}
            {cart && cart.length > 0 && (
              <button className="flex w-full items-center justify-center rounded-lg bg-green-500 py-1 font-semibold text-primary-50">
                <Link
                  target="_blank"
                  to={`https://wa.me/${phoneNumber}?text=Estoy interesado en: ${cart
                    .map((product) => product.name)
                    .join(" - ")}`}
                >
                  Comprar
                </Link>
              </button>
            )}
            {cart && cart.length == 0 && (
              <div className="flex flex-col items-center justify-center px-2 py-1 text-center">
                <span className="text-gray-500">
                  No hay productos en el carrito
                </span>
                <span className="text-gray-500"></span>
                <img className="w-1/2 opacity-50" src={EmptyBag} />
              </div>
            )}
          </div>
        </PopoverContent>
      </Popover>
      {popAvtive && (
        <div className="absolute left-1/2 top-16 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full bg-primary-200 p-3 py-2">
          <span className="transform font-semibold text-primary-800">
            {text}
          </span>
          {cart.length > 0 && (
            <span className="rounded-full bg-green-300/50 px-2">
              {cart.length}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
