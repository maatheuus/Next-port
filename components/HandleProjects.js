"use client";

import { projects } from "@/app/_util/utility.js";
import { useOpenModal } from "@/context/ModalContext";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProjectsDetails from "./ProjectsDetails";
import SideBar from "./SideBar";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

function HandleProjects() {
  const { openProject } = useOpenModal();
  const [idProject, setIdProject] = useState();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.3 }}
      >
        {projects.map((project) => {
          return (
            <motion.button
              variants={variants}
              initial="hidden"
              animate="show"
              key={project.id}
              className="px-6 mb-10 w-full"
              onClick={() => {
                openProject();
                setIdProject(project.id);
              }}
            >
              <ProjectsDetails
                classImg={project.classImg}
                variants={images}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence>
        <SideBar id={idProject} />
      </AnimatePresence>
    </>
  );
}

export default HandleProjects;
