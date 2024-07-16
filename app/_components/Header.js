"use client";

import Link from "next/link";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useOpenMenu } from "@/app/_context/MenuContext";

import Navigation from "@/app/_components/Navigation";
import Menu from "@/app/_components/Menu";
import ToggleTheme from "./ToggleTheme";
import { twMerge } from "tailwind-merge";

function Header() {
  const { menuIsOpen, openMenu } = useOpenMenu();

  const nameHeader = "<Matheus />";

  return (
    <header className="py-10 text-2xl">
      <div className="px-10 flex flex-wrap justify-between items-center max-w-[1320px] mx-auto">
        <h1 className="text-3xl">
          <Link href="/">{nameHeader}</Link>
        </h1>

        <div className="md:inline hidden">
          <Navigation />
        </div>

        <div className="md:hidden block relative h-10 w-auto">
          {!menuIsOpen && (
            <button
              onClick={openMenu}
              className="absolute right-2 bottom-1 z-50"
            >
              <FaBarsStaggered className="w-10 h-8" />
            </button>
          )}
        </div>

        {menuIsOpen && <Menu />}
      </div>
    </header>
  );
}

export default Header;
