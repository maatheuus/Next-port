"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AnimateItemContainer from "./AnimateItemContainer";
import usePreloader from "./usePreloader";
import { slideUp } from "./utils/anim";

export default function Preloader({ label }) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  const curve = usePreloader(dimension);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-dvh w-dvw flex items-center justify-center fixed z-50 bg-[#141516]"
    >
      {dimension.width > 0 && (
        <>
          <AnimateItemContainer />

          <div className="flex items-center gap-2 z-50">
            <span
              style={{
                boxShadow: "rgba(255, 255, 255, 0.6) 0px 0px 25px 15px",
              }}
              className="w-3 h-3 bg-white rounded-full"
            ></span>
            <p className="text-8xl text-white">{label}</p>
            <span
              style={{
                boxShadow: "rgba(255, 255, 255, 0.6) 0px 0px 25px 15px",
              }}
              className="w-3 h-3 bg-white rounded-full"
            ></span>
          </div>

          <svg className="absolute top-0 w-full h-[calc(100%_+_300px)] ">
            <motion.path
              className="fill-[#141516]"
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
}
