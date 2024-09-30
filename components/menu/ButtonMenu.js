import { useOpenMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
// import PerspectiveText from "./PerspectiveText";

function ButtonMenu() {
  const { menuIsOpen, closeMenu, openMenu } = useOpenMenu();

  return (
    <div
      className="absolute top-0 right-0 w-6 h-6 cursor-pointer rounded-3xl overflow-hidden"
      aria-expanded={menuIsOpen}
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
          className="elementMenu bg-black text-white dark:bg-white"
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
