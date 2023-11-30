import { RoundedButton } from "./RoundedButton";
import { CiShoppingCart } from "react-icons/ci";
import { HiBellAlert } from "react-icons/hi2";
import { RxAvatar } from "react-icons/rx";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { SearchInput } from "./SearchInput";

export const Header = () => {

  return (
    <div className="w-full bg-primary-100 myTheme">
      <header className="d-padding flex h-20 w-full items-center justify-between bg-primary-50 bg-gradient-to-r drop-shadow-md">
        <div className="w-36">
          <Link to="/">
            <img src={logo} alt="Logo de la empresa" className="h-14" />
          </Link>
        </div>
        <SearchInput></SearchInput>
        <div>
          <nav className="flex items-center justify-center gap-3">
            <RoundedButton text="Notify">
              <HiBellAlert className="mr-[1px] text-2xl text-sky-800" />
            </RoundedButton>
            <RoundedButton open={true} text="Cart">
              <CiShoppingCart className="mr-[1px] text-2xl text-sky-800" />
            </RoundedButton>
            <RoundedButton text="Profile">
              <RxAvatar className="mr-[1px] text-2xl text-sky-800" />
            </RoundedButton>
          </nav>
        </div>
      </header>
    </div>
  );
};
