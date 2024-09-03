import { projects } from "@/app/_util/utility.js";
import { ActiveLink } from "@/components/ActiveLink";
import ProjectsDetails from "@/components/ProjectsDetails";
import SideBar from "@/components/SideBar";
import Spinner from "@/components/Spinner";
import { useOpenModal } from "@/context/ModalContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { SquareArrowOutUpRight } from "lucide-react";
import { Suspense, useState } from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: 20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

function MyProjects() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const { openProject } = useOpenModal();
  const [idProject, setIdProject] = useState();

  const firstTwoProjects = projects.filter(
    (project) => project.id === 1 || project.id === 5
  );
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      className="h-screen col-span-1"
    >
      {/* <Heading label="Projetos." /> */}
      <motion.div className="flex flex-col justify-center mt-10">
        <Suspense fallback={<Spinner />}>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="visible"
            className="grid list-none overflow-hidden"
            // style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {firstTwoProjects.map((project) => {
              return (
                <motion.li key={project.id} variants={item}>
                  <button
                    className="px-6"
                    // style={{ maxWidth: "50%" }}
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
      </motion.div>

      <Suspense fallback={<Spinner />}>
        <SideBar id={idProject} />
      </Suspense>
      <ActiveLink href="/projects">
        <p className="text-lg flex gap-x-4 items-center hover:underline">
          <span>Ver todos os projetos</span>
          <SquareArrowOutUpRight className="w-4 h-4" />
        </p>
      </ActiveLink>
    </motion.section>
  );
}

export default MyProjects;
