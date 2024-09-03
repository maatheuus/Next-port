"use client";

import { FaBarsStaggered } from "react-icons/fa6";
import { useOpenMenu } from "@/context/MenuContext";

import Menu from "./Menu";
import Navigation from "./Navigation";
import ButtonIcon from "./ButtonIcon";

function Header() {
  const { menuIsOpen, openMenu } = useOpenMenu();

  return (
    <header className="py-10 text-2xl">
      <div className="px-10 flex flex-wrap justify-between items-center max-w-[1320px] mx-auto">
        <div className="md:inline hidden">
          <Navigation />
        </div>

        <div className="md:hidden block relative h-10 w-auto">
          {!menuIsOpen && (
            <ButtonIcon
              className="absolute right-2 bottom-1 z-50"
              onClick={openMenu}
            >
              <FaBarsStaggered className="w-10 h-8" />
            </ButtonIcon>
          )}
        </div>

        {menuIsOpen && <Menu />}
      </div>
    </header>
  );
}

export default Header;
