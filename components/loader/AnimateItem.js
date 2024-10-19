import { motion } from "framer-motion";
import { transition } from "./utils/anim";

export default function AnimateItem({ delay, variants }) {
  return (
    <>
      <div className="flex absolute z-10 left-0 top-0" aria-hidden={true}>
        <motion.span
          variants={variants}
          initial="initial"
          animate="animate"
          transition={{ ...transition, delay }}
          className="block w-5 h-5 rounded-full"
        ></motion.span>
      </div>
    </>
  );
}
