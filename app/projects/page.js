"use client";

import { useState } from "react";
import { projects } from "@/app/_util/utility.js";
import Footer from "@/app/_components/Footer";
import Projects from "@/app/_components/Projects";
import SideBar from "@/app/_components/SideBar";

function Page() {
  const [open, setOpen] = useState(false);
  const [idProject, setIdProject] = useState();

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="w-full h-full ">
        <h1 className="text-5xl font-bold">Projetos.</h1>
        <section className="columns-1 mt-12 min-[710px]:columns-2">
          {projects.map((project) => {
            return (
              <button
                key={project.id}
                className="px-6 mb-10"
                onClick={() => {
                  openModal();
                  setIdProject(project.id);
                }}
              >
                <Projects
                  open={open}
                  classImg={project.classImg}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                />
              </button>
            );
          })}
        </section>
      </div>
      {open && (
        <SideBar isModalOpen={open} id={idProject} closeModal={closeModal} />
      )}

      <Footer label="Entre em contato comigo" to="/contact" />
    </>
  );
}

export default Page;
