import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/login";

export const UserButton = ({ children, text }) => {
  const { isLogged } = useContext(LoginContext);
  const [popAvtive, setPopActive] = useState(false);
  const [colorBorder, setColorBorder] = useState("")
  // Funciones que activen el texto descriptivo de cada botón
  const handleEnter = () => {
    setPopActive(true);
  };
  const handleLeave = () => {
    setPopActive(false);
  };
  useEffect(() => {
    const color = isLogged ? "border-green-200" : "border-none";
    setColorBorder(color);
  }, [isLogged])

  return (
    <div className="relative">
      <button
        onClick={handleLeave}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={`flex items-center justify-center rounded-full  p-2 hover:bg-primary-200 border-3 ${colorBorder}`}
      >
        {children}
      </button>
      {
        popAvtive && (
          <div className="absolute left-1/2 top-16 z-50 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-200 p-3 py-2">
            <span className="transform font-semibold text-primary-800">
              {text}
            </span>
          </div>
        )
      }
    </div>
  )
}