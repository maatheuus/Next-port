"use client";

import Menu from "@/components/menu/Menu";
import { useOpenMenu } from "@/context/MenuContext";
import { Logs } from "lucide-react";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";
import ButtonMenu from "../menu/ButtonMenu";

function Navbar() {
  const { menuIsOpen } = useOpenMenu();

  return (
    <div className="relative pt-6">
      <nav>
        <div className="container hidden md:flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap px-8 py-8">
          <Logo />
          <Navigation />
          <DarkMode />
        </div>
      </nav>
      <Menu />
    </div>
  );
}

export default Navbar;
