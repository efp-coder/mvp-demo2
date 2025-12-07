"use client";
import Button from "@/components/ui/Button";
import NavLink from "@/components/NavLink";


type NavBarProps = {
  closeMenu: () => void;
}

export default function NavBar({ closeMenu }: NavBarProps) {


  return (
    <nav className="fixed inset-0 bg-primary/80 z-50 flex flex-col items-center justify-center space-y-6 text-4xl text-text-dark">
      <Button onClick={closeMenu} text="X" textOnHover="error" />
      <NavLink pressLink={closeMenu} href={"/"}>Home</NavLink>
      <NavLink pressLink={closeMenu} href={"/about-us"}>About us</NavLink>
      <NavLink pressLink={closeMenu} href={"/login"}>Login</NavLink>
    </nav>
  );

}
