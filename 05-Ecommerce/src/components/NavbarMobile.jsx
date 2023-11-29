import { useState } from "react";
import Logo from "../assets/Logo.svg"
import { HiBellAlert } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { SearchInput } from "./SearchInput";
import { RoundedButton } from "./RoundedButton";

export const NavbarMobile = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Perfil",
    "Notificaciones",
    "Carrito"
  ];

  return (
    <Navbar className="shadow-lg" onMenuOpenChange={setIsMenuOpen}>

      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link to={"/"}>
            <img className="w-32" src={Logo} alt="Logo" />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="gap-4" justify="center">
        <SearchInput></SearchInput>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden sm:flex" >
        <nav className="flex items-center myTheme justify-center gap-3]">
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
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={item}
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}