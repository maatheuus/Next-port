import Footer from "@/components/Footer";
import scrollIcon from "@/public/svg/scroll-black.gif";
import { motion } from "framer-motion";
import { Link } from "next-view-transitions";
import Image from "next/image";
import Heading from "./Heading";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};
function Introduction() {
  return (
    <motion.section
      className="flex items-center flex-col p-4 h-screen"
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ margin: "-70px" }}
      transition={{ duration: 0.9 }}
    >
      <motion.article
        transition={transition}
        variants={variants}
        className="mt-24"
      >
        <div className="w-3/4 mx-auto">
          <Heading label="Olá, eu sou o Matheus!" className="mb-3" />
          <motion.p
            transition={transition}
            variants={variants}
            className="text-lg py-4 strong"
          >
            Seu amigo desenvolvedor <strong>Full-Stack</strong> apaixonado por
            programação, que está sempre codando com entusiasmo e um café do
            lado. Sempre maxímo tentando fazer os melhores{" "}
            <Link href="/projects" className="uppercase font-bold underline">
              Projetos
            </Link>{" "}
            tanto FrontEnd quanto no Backend.
          </motion.p>
          <motion.p
            transition={transition}
            variants={variants}
            className="text-lg"
          >
            Quando não estou programando, você pode me encontrar lendo blogs ou
            balançando no ritmo do rap e do jazz, perdendo-me no fluxo cativante
            das melodias.
          </motion.p>
          <Footer label="Ver mais sobre mim" to="/about" />
        </div>
      </motion.article>
      {/* <div className="w-full mx-auto flex justify-center items-center">
        <Image width={35} height={35} src={scrollIcon} alt="Gif animated" />
      </div> */}
    </motion.section>
  );
}

export default Introduction;
