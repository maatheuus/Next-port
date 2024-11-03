import { useOpenMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function ButtonMenu() {
  const { menuIsOpen, closeMenu, openMenu } = useOpenMenu();
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="absolute top-0 right-0 w-6 h-6 cursor-pointer rounded-3xl overflow-hidden"
      aria-expanded={menuIsOpen}
      onMouseOver={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: menuIsOpen ? "-100%" : "0%" }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <div
          className={twMerge(
            "elementMenu text-white bg-black dark:bg-white transition-colors duration-700",
            isActive
              ? "bg-white dark:bg-black border-black border-0 bg-transparent"
              : "bg-black dark:bg-white"
          )}
          onClick={openMenu}
        ></div>
        <div
          className="elementMenu bg-white dark:bg-black"
          onClick={closeMenu}
        ></div>
      </motion.div>
    </div>
  );
}

export default ButtonMenu;
