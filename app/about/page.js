import Footer from "@/app/_components/Footer";
import Courses from "@/app/_components/Courses";

export const metadata = {
  title: "About Me",
};

function Page() {
  return (
    <section className="h-full mt-10 min-w-[40%]">
      <div className="grid grid-cols-1 gap-10 w-3/4 mx-0 md:mx-auto">
        <div className="text-2xl w-full gap-4">
          <h1 className="text-5xl font-bold mb-4">Sobre mim.</h1>
          <p className="hyphens-auto text-medium mb-2 strong">
            Olá! Sou um entusiasta de tecnologia viciado em programação, hoje eu
            sou um desenvolvedor <strong>Full-Stack</strong>. Mesmo sem ter
            conseguido meu primeiro emprego na área ainda, estou sempre buscando
            novas tecnologias para aprender. Acredito que o aprendizado contínuo
            é essencial para qualquer programador, e isso me motiva todos os
            dias. Hoje em dia eu procuro desenvolver mais minhas soft skills
            (habilidades comportamentais) e agora busco estudar
            <strong> fundamentos de metodologias ágeis</strong>,
            <strong> adaptabilidade</strong> e com isso, conseguir ter uma visão
            mais analítica, um pensamento estratégico e um trabalho voltado para
            <strong> resultados de alta performance.</strong>
          </p>
          <p className="hyphens-auto text-medium strong">
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
        </div>
        <Courses />
        <Footer label="Ver meus projetos" to="/projects" />
      </div>
    </section>
  );
}

export default Page;
