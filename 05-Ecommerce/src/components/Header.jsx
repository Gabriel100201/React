import { BsSearch } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { HiBellAlert } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/Logo.svg";
import { RoundedButton } from "./RoundedButton";

export const Header = () => {
  return (
    <header className="flex h-20 w-full items-center justify-between bg-gradient-to-r from-sky-200 to-sky-400 px-80">
      <div className="w-36">
        <img src={logo} alt="Logo de la empresa" className="h-14" />
      </div>
      <div>
        <div className="flex h-10 place-content-center opacity-80 hover:opacity-100">
          <input
            className="text-primary h-full w-[400px] rounded-bl-xl rounded-tl-xl px-5 outline-none"
            type="text"
          />
          <button
            className="h-full rounded-br-xl rounded-tr-xl bg-sky-50 px-3"
            type="text"
          >
            <BsSearch className="font-semibold text-sky-800" />
          </button>
        </div>
      </div>
      <div>
        <nav className="flex items-center justify-center gap-3">
          <RoundedButton text="Notify">
            <HiBellAlert className="mr-[1px] text-xl text-sky-800" />
          </RoundedButton>
          <RoundedButton text="Cart">
            <CiShoppingCart className="mr-[1px] text-xl text-sky-800" />
          </RoundedButton>
          <RoundedButton text="Profile">
            <RxAvatar className="mr-[1px] text-xl text-sky-800" />
          </RoundedButton>
        </nav>
      </div>
    </header>
  );
};
