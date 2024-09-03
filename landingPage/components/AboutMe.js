import { motion, useScroll, useTransform } from "framer-motion";
import Heading from "./Heading";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

function AboutMe() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      style={{ scale, height: "fit-content" }}
    >
      <motion.div
        style={{ scaleY: scrollYProgress }}
        transition={transition}
        variants={variants}
        className="w-full col-span-1"
      >
        <Heading label="Sobre mim." />
        <p className="hyphens-auto text-lg strong mt-4">
          Sou um desenvolvedor full-stack e estou mergulhado no mundo do
          desenvolvimento web. Com habilidades intermediárias em tecnologias
          como React.js, Next.js, Node.js, MongoDB, Express, JavaScript e
          TypeScript, estou sempre buscando aprender e melhorar. Tenho algumas
          certificações da Udemy, que ajudam a garantir que estou na trilha
          certa, e estou focado em construir projetos pessoais para ganhar
          experiência prática. Meu objetivo é crescer para uma posição de
          desenvolvedor full-stack e fazer parte de uma equipe onde possa
          realmente fazer a diferença. Sou conhecido por minha boa comunicação,
          senso de urgência e capacidade de trabalhar bem em equipe. Estou
          sempre pronto para enfrentar novos desafios e contribuir para projetos
          de forma eficiente e colaborativa.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default AboutMe;
