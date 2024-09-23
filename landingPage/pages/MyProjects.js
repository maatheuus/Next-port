import { projects } from "@/app/_util/utility.js";
import { ActiveLink } from "@/components/ActiveLink";
import ProjectsDetails from "@/components/ProjectsDetails";
import SideBar from "@/components/SideBar";
import Spinner from "@/components/Spinner";
import { useOpenModal } from "@/context/ModalContext";
import { motion } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { Suspense, useState } from "react";
import Heading from "./Heading";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: {
    filter: "blur(10px)",
    transform: "translateY(50%)",
    opacity: 0,
  },
  visible: {
    filter: "blur(0)",
    transform: "translateY(0)",
    opacity: 1,
  },
};

function MyProjects() {
  const { openProject } = useOpenModal();
  const [idProject, setIdProject] = useState();

  const firstTwoProjects = projects.filter(
    (project) => project.id === 3 || project.id === 5
  );

  return (
    <motion.section
      className="mb-10"
      initial="hidden"
      whileInView="visible"
      transition={transition}
      variants={variants}
    >
      <Heading label="Projetos." className="block md:hidden mb-6" />

      <div className="flex flex-col justify-center mt-10">
        <Suspense fallback={<Spinner />}>
          <motion.ul className="grid list-none overflow-hidden bg-red-800">
            {firstTwoProjects.map((project) => {
              return (
                <motion.li key={project.id}>
                  <button
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
                </motion.li>
              );
            })}
          </motion.ul>
        </Suspense>

        <ActiveLink href="/projects">
          <p className="text-lg flex gap-x-4 items-center hover:underline">
            <span>Ver todos os projetos</span>
            <SquareArrowOutUpRight className="w-4 h-4" />
          </p>
        </ActiveLink>
      </div>
      <Suspense fallback={<Spinner />}>
        <SideBar id={idProject} />
      </Suspense>
    </motion.section>
  );
}

export default MyProjects;
