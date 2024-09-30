"use client";

import { useOpenMenu } from "@/context/MenuContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ButtonMenu from "./ButtonMenu";
import LinksMenu from "./LinksMenu";
import { menu } from "./utils/anim";

function Menu() {
  const { menuIsOpen } = useOpenMenu();

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "auto");
  }, [menuIsOpen]);

  return (
    <div className="md:hidden fixed top-12 right-12 z-50">
      <motion.menu
        className="w-[348px] h-[650px] bg-black text-white dark:bg-white dark:text-black rounded-3xl relative overflow-hidden transition-colors duration-1000"
        initial="closed"
        variants={menu}
        animate={menuIsOpen ? "open" : "closed"}
        role="menu"
      >
        <AnimatePresence mode="wait">
          {menuIsOpen && <LinksMenu />}
        </AnimatePresence>
      </motion.menu>

      <ButtonMenu />
    </div>
  );
}

export default Menu;
