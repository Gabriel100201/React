import { useContext } from "react";
import { ColorContext } from "../context/color";

export const Header = () => {
  const { color, setColor } = useContext(ColorContext);
  return <header className={`${color} w-full text-center`}>Header</header>;
};
