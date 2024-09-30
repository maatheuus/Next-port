import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./Heading";
import { Link } from "next-view-transitions";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateX(-100%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateX(0)", opacity: 1 },
};

function AboutMe() {
  const { scrollYProgress } = useScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section className="p-4 h-screen">
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={transition}
        variants={variants}
      >
        <Heading label="Sobre mim." className="mb-6" />
      </motion.div>

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={transition}
      >
        <p className="hyphens-auto text-lg strong mt-4">
          Sou um desenvolvedor <strong>full-stack</strong> e estou mergulhado no
          mundo do desenvolvimento web. Com habilidades intermediárias em
          tecnologias como <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
          <strong>Node.js</strong>, <strong>MongoDB</strong>,{" "}
          <strong>Express</strong>, <strong>JavaScript</strong> e
          <strong>TypeScript</strong>, estou sempre buscando aprender e
          melhorar. Tenho certificações da Udemy, que ajudam a garantir que
          estou na trilha certa, e estou focado em construir{" "}
          <Link href="/projects" className="uppercase underline font-bold">
            projetos
          </Link>{" "}
          pessoais para ganhar experiência prática. Meu objetivo é crescer para
          uma posição de desenvolvedor full-stack e fazer parte de uma equipe
          onde possa realmente fazer a diferença.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutMe;
