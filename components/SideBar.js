"use client";

import { projects } from "@/app/_util/utility";
import { useClickOutside, useOpenModal } from "@/context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import LayoutModal from "./LayoutModal";

const show = {
  display: "block",
  opacity: 1,
};

const hide = {
  opacity: 0,
  display: "none",
  transition: {
    duration: 1.5,
    ease: "easeInOut",
  },
};

function SideBar({ id }) {
  const modalRef = useRef();
  const curProject = projects.find((project) => +project.id === +id);

  const { projectIsOpen, closeProject } = useOpenModal();

  const ref = useClickOutside(closeProject);

  useEffect(() => {
    if (projectIsOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "auto");
  }, [projectIsOpen, ref]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, display: "none" }}
        animate={projectIsOpen ? show : hide}
        exit={hide}
        ref={modalRef}
      >
        <div className="bg-stone-900/50 fixed top-0 right-0 w-screen h-screen z-[9999]"></div>
        <motion.aside
          initial={{ borderRadius: "50px" }}
          animate={{
            x: projectIsOpen ? 0 : "100%",
            borderRadius: projectIsOpen ? ["50px", "50px", "0px"] : "50px",
          }}
          exit={{
            x: "100%",
            borderRadius: ["0px", "0px", "50px"],
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            borderRadius: {
              duration: 0.6,
              ease: "easeInOut",
              times: [0, 0.9, 1],
            },
            x: {
              duration: 1,
              ease: "easeInOut",
            },
          }}
          ref={ref}
          className="fixed top-0 right-0 z-[99999] w-screen md:w-[470px] h-full bg-background"
          aria-label="sidebar to the projects"
        >
          <LayoutModal project={curProject || []} />
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}

export default SideBar;
