"use client";

import { Suspense, useState } from "react";
import { projects } from "@/app/_util/utility.js";
import { useOpenModal } from "@/app/_context/ModalContext";
import ProjectsDetails from "@/app/_components/ProjectsDetails";
import SideBar from "@/app/_components/SideBar";
import Spinner from "@/app/_components/Spinner";

function HandleProjects() {
  const { openProject } = useOpenModal();
  const [idProject, setIdProject] = useState();

  return (
    <>
      {projects.map((project) => {
        return (
          <button
            key={project.id}
            className="px-6 mb-10 w-full"
            onClick={() => {
              openProject();
              setIdProject(project.id);
            }}
          >
            <ProjectsDetails
              classImg={project.classImg}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
            />
          </button>
        );
      })}

      <Suspense fallback={<Spinner />}>
        <SideBar id={idProject} />
      </Suspense>
    </>
  );
}

export default HandleProjects;
