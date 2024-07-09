"use client";

import Projects from "@/app/_components/Projects";
import { projects } from "@/app/_util/utility.js";
import Footer from "../_components/Footer";
import { useState } from "react";
import { Box, Modal } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "0",
  right: "0",
  bgcolor: "black",
  width: "34rem",
  height: "100%",
  zIndex: "99999",
  boxShadow: 24,
};

function Page() {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="w-full h-full bg-stone-100">
        <h1 className="text-5xl font-bold">Projects.</h1>
        <section className="columns-1 min-[710px]:columns-2">
          {projects.map((project) => {
            return (
              <button
                key={project.id}
                className="border-none"
                onClick={() => {
                  setOpen(!open);
                  console.log(project.id);
                }}
              >
                <Projects
                  open={open}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                />
              </button>
            );
          })}
          {/* <Modal open={open} onClose={closeModal}>
            <Box sx={style}>
              <p className="text-white">Text in a modal</p>
            </Box>
          </Modal> */}
        </section>
      </div>

      <Footer label="Entre em contato comigo" to="/contact" />
    </>
  );
}

export default Page;
