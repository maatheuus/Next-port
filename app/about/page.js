import Image from "next/image";
import Skills from "@/app/_components/Skills.js";

import profilePhoto from "@/public/profile-photo.png";
import Footer from "../_components/Footer";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <section className="h-full mt-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-0">
        <div className="text-2xl w-full gap-4">
          <h1 className="text-4xl mb-4">
            <span>Sobre</span> <span>Mim</span>
          </h1>
          <p className="hyphens-auto mb-2">
            E aí! Sou um entusiasta de tecnologia viciado em programação, hoje
            eu sou um <strong>Full-Stack</strong> e apaixonado por basquete,
            músicas e fotografar por hobby. Mesmo sem ter conseguido meu
            primeiro emprego na área ainda, estou sempre buscando novas
            tecnologias para dominar. Acredito que o aprendizado contínuo é
            essencial para qualquer programador, e isso me motiva todos os dias.
            Hoje em dia eu procuro desenvolver mais minhas soft skills
            (habilidades comportamentais) e agora busco estudar
            <strong> fundamentos de metodologias ágeis</strong>,
            <strong> adaptabilidade</strong> e com isso, conseguir ter uma visão
            mais analítica, um pensamento estratégico e um trabalho voltado para
            <strong> resultados de alta performance. </strong>
          </p>
          <p className="hyphens-auto">
            Com as <strong> experiências</strong> que eu possuo de empregos
            passados, tenho um senso de <strong> organização</strong> e urgência
            muito bom, sei que é uma característica essencial para manter um
            time produzindo em conjunto. Estou ansioso para encontrar uma equipe
            onde possa não apenas aplicar minhas habilidades em desenvolvimento,
            mas também aprender com colegas experientes e contribuir para
            projetos empolgantes. Se você está procurando alguém que traga
            energia, entusiasmo e uma sede insaciável por novos desafios, estou
            aqui pronto para embarcar nessa jornada com você!
          </p>
          <Skills />
        </div>
        <div className="mx-auto overflow-hidden max-w-[300px]">
          <Image
            className="object-fill w-fit rounded-xl border shadow-md"
            placeholder="blur"
            src={profilePhoto}
            alt="Profile photo"
          />
        </div>
        <Footer label="Ver meus projetos" to="/projects" />
      </div>
    </section>
  );
}

export default Page;
