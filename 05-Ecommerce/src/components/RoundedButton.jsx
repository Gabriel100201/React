import { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext } from "../context/cart";
import { PopoverContent, PopoverTrigger, Popover } from "@nextui-org/react";
import { FaRegTrashAlt } from "react-icons/fa";
import EmptyBag from "../assets/bag-svgrepo-com.svg"

export const RoundedButton = ({ children, text, open = false }) => {
  const { cart, count, removeToCart } = useContext(cartContext);
  const [popAvtive, setPopActive] = useState(false);

  const hanndleRemove = (ev) => {
    const productId = ev.currentTarget.dataset.id;
    removeToCart(productId)
  }
  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };

  return (
    <div className="relative">
      <Popover placement="bottom" showArrow={true} >
        <PopoverTrigger>
          <button
            onClick={handleLeave}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="flex items-center justify-center rounded-full bg-primary-50 p-2 hover:bg-primary-200"
          >
            {children}
          </button>
        </PopoverTrigger>
        {(text == "Cart") &&

          <PopoverContent>
            <div className="px-1 py-2 flex flex-col w-64 justify-center items-center gap-5">
              {
                cart && (cart.length > 0) &&
                cart.map((product) => {
                  return (
                    <div key={product.name} className="w-full justify-between flex border-2 hover:border-primary-900/30 cursor-pointer rounded-lg p-1">
                      <div className="flex flex-col w-full px-3 gap-1">
                        <div className="flex w-full justify-between">
                          <span className="font-bold">{product.name}</span>
                          <span className="text-green-600 font-bold text-sm">${product.price}</span>
                        </div>
                        <div className="flex w-full justify-between">
                          <span>Cantidad: {product.count}</span>
                          <button data-id={product.name} onClick={hanndleRemove}><FaRegTrashAlt /></button>
                        </div>
                      </div>
                      <div className="w-16 flex justify-center items-center">
                        <img className="w-full" src={product.imageUrl} alt={product.name} />
                      </div>
                    </div>
                  )
                })
              }
              {cart && (cart.length == 0) && (
                <div className="px-2 py-1 text-center flex flex-col justify-center items-center">
                  <span className="text-gray-500">No hay productos en el carrito</span>
                  <span className="text-gray-500"></span>
                  <img className="w-1/2 opacity-50" src={EmptyBag} />
                </div>
              )}
            </div>
          </PopoverContent>
        }
      </Popover>

      {popAvtive && (
        <div className="absolute left-1/2 top-16 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200 p-3 py-2">
          <span className="transform font-semibold text-primary-800">
            {text}
          </span>
          {count > 0 && text == "Cart" && (
            <span className="ml-3 transform rounded-full bg-primary-400 px-3 font-semibold text-primary-50">
              {count}
            </span>
          )}
        </div>
      )}
    </div>
  );
};