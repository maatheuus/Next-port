import { useOpenMenu } from "@/context/MenuContext";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import DarkMode from "../navbar/DarkMode";
import { perspective } from "./utils/anim";
import { listMenu } from "./utils/utils";

function LinksMenu() {
  const { closeMenu } = useOpenMenu();
  return (
    <div className="flex flex-col justify-between pt-24 px-10 pb-11 h-full box-border">
      <ul className="flex gap-y-5 flex-col w-full h-full">
        {listMenu.map((item, i) => (
          <li key={item.label} className="linkMenu">
            <motion.div
              onClick={closeMenu}
              custom={i}
              variants={perspective}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <Link className="text-3xl sm:text-5xl" href={item.href}>
                {item.label}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>

      <div className="absolute right-8 bottom-20">
        <DarkMode />
      </div>
    </div>
  );
}

export default LinksMenu;
