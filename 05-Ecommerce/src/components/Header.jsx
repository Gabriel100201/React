import { RoundedButton } from "./RoundedButton";
import { BsSearch } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { HiBellAlert } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/Logo.svg";

export const Header = () => {
  return (
    <header className="d-padding flex h-20 w-full items-center justify-between bg-primary-50 bg-gradient-to-r">
      <div className="w-36">
        <img src={logo} alt="Logo de la empresa" className="h-14" />
      </div>
      <div>
        <div className="flex h-10 place-content-center opacity-80 hover:opacity-100">
          <input placeholder="¿Qué desea buscar?"
            className="h-full w-[400px] rounded-bl-xl rounded-tl-xl bg-primary-200 px-5 text-primary-800 outline-none"
            type="text"
          />
          <button
            className="h-full rounded-br-xl rounded-tr-xl bg-primary-800 px-3"
            type="text"
          >
            <BsSearch className="font-semibold text-primary-50" />
          </button>
        </div>
      </div>
      <div>
        <nav className="flex items-center justify-center gap-3">
          <RoundedButton text="Notify">
            <HiBellAlert className="mr-[1px] text-2xl text-sky-800" />
          </RoundedButton>
          <RoundedButton text="Cart">
            <CiShoppingCart className="mr-[1px] text-2xl text-sky-800" />
          </RoundedButton>
          <RoundedButton text="Profile">
            <RxAvatar className="mr-[1px] text-2xl text-sky-800" />
          </RoundedButton>
        </nav>
      </div>
    </header>
  );
};
