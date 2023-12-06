import { useState } from "react";
import Logo from "../assets/Logo.svg"
import { HiBellAlert } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { SearchInput } from "./SearchInput";
import { RoundedButton } from "./RoundedButton";
import { UserButton } from "./UserButton";
import { NotifyButton } from "./NotifyButton";
import { CartButton } from "./CartButton";

export const NavbarMobile = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setMenuDefault = () => {
    setIsMenuOpen(false)
  }

  const menuItems = [
    {
      "text": "Perfil",
      "link": "login"
    },
    {
      "text": "Todos",
      "link": "all"
    },
    {
      "text": "Carrito",
      "link": "cart"
    }
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} className="shadow-lg" onMenuOpenChange={setIsMenuOpen}>

      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="hidden sm:flex">
          <Link to={"/"}>
            <img className="w-32" src={Logo} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-4" justify="center">
        <SearchInput></SearchInput>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex" >
        <nav className="flex items-center myTheme justify-center gap-3">
          <CartButton text="Cart">
            <CiShoppingCart className="mr-[1px] text-2xl text-sky-800" />
          </CartButton>
          <NotifyButton text="Notify">
            <HiBellAlert className="mr-[1px] text-2xl text-sky-800" />
          </NotifyButton>
          <UserButton text="Profile">
            <Link to={"/login"}>
              <RxAvatar className="mr-[1px] text-2xl text-sky-800" />
            </Link>
          </UserButton>
        </nav>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden" justify="end">
        <RoundedButton open={true} text="Cart">
          <CiShoppingCart className="mr-[1px] text-2xl text-sky-800" />
        </RoundedButton>
      </NavbarContent>

      <NavbarMenu className="p-5 z-50">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link onClick={setMenuDefault}
              to={item.link}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
        <Link onClick={setMenuDefault} to={"/"}>
          <div className="w-full mt-48 h-full px-24">
            <img src={Logo} alt="" />
          </div>
        </Link>
      </NavbarMenu>
    </Navbar>
  )
}