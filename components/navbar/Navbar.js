"use client";

import Menu from "@/components/Menu";
import { useOpenMenu } from "@/context/MenuContext";
import { Logs } from "lucide-react";
import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";

function Navbar() {
  const { menuIsOpen, openMenu } = useOpenMenu();

  return (
    <div className="relative pt-6">
      <nav>
        <div className="container hidden md:flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap px-8 py-8">
          <Logo />
          <Navigation />
          <DarkMode />
        </div>
      </nav>

      <div className="md:hidden block relative h-10 w-auto">
        {!menuIsOpen && (
          <Button
            variant="ghost"
            className="absolute right-2 bottom-1 z-50"
            onClick={openMenu}
          >
            <Logs className="w-10 h-8" />
          </Button>
        )}
      </div>
      {menuIsOpen && <Menu />}
    </div>
  );
}

export default Navbar;
