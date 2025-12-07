"use client";

import Button from "@/components/ui/Button"
import NavBar from "@/components/NavBar";
import prettifyPath from "@/helpers/prettifyPath";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => { setIsMenuOpen(!isMenuOpen); };
    const menuSymbol = isMenuOpen ? "x" : "≡";
    const rawPath = usePathname();
    const safePath = rawPath ?? "/";
    const sectionText =prettifyPath(safePath) ;


  return (
    <header className="flex bg-primary p-4 text-2xl justify-between items-center relative z-50">
      <section className="bg-background text-accent p-2 rounded-md text-balance m-2 font-code">{sectionText}</section>
      <Button text={menuSymbol} onClick={toggleMenu} />
      {isMenuOpen && <NavBar closeMenu={toggleMenu} />}
    </header>

  );

}
