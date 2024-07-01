import Image from "next/image";
import Skills from "@/app/_components/Skills.js";

import profilePhoto from "@/public/profile-basket.jpg";

export const metadata = {
  title: "About",
};

function Page() {
  return (
    <section className="flex flex-col gap-10 text-lg items-center">
      <div className=" flex flex-col gap-5 md:flex-row md:gap-10">
        <div className="w-96 mx-auto rounded-full overflow-hidden border shadow-md">
          <Image
            className="object-fill w-fit h-full"
            placeholder="blur"
            src={profilePhoto}
            alt="Profile photo"
          />
        </div>

        <div className="flex-1 text-2xl">
          <h1 className="text-4xl mb-4">
            <span>Sobre</span> <span className="span-me">Mim</span>
          </h1>
          <p className="hyphens-auto">
            Para chegar até a jornada de estudante de Desenvolvimento Web Front
            End eu preciso dizer que aqui nunca tive tempo ruim e sempre
            trabalhei, fiz de tudo um pouco. Meu primeiro trabalho foi em uma
            lavadora, depois trabalhei como empacotador, realizei um estágio em
            uma biblioteca e agora estou como Operador Industrial. Como sou um
            entusiasta da tecnologia, procurei me desenvolver nessa área e agora
            busco estudar
            <strong> fundamentos de metodologias ágeis</strong>,{" "}
            <strong>adaptabilidade</strong> e com isso, consigo ter uma visão
            mais analítica, um pensamento estratégico e{" "}
            <strong>
              um trabalho voltado para resultados de alta performance
            </strong>
            . Com as <strong>experiências</strong> que eu possuo, tenho um senso
            de <strong>organização</strong> e urgência muito bom, sei que é uma
            característica essencial para manter um time performando e
            produzindo em conjunto. A procura da primeira oportunidade no
            mercado tech, estou buscando oportunidades de desenvolvedor jr e
            espero que me conhecendo até aqui, eu possa ter despertado seu
            interesse por um papo. Nas horas vagas sou um amante apaixonado do
            basquete e vários outros esportes que envolvam se mexer ativamente
            :).
          </p>
        </div>
      </div>
      <Skills />
    </section>
  );
}

export default Page;
