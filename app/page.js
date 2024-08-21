import Footer from "@/app/_components/Footer";
import { Link } from "next-view-transitions";
import WavesSVG from "./_components/WavesSVG";

function Page() {
  return (
    <>
      <section className="h-full">
        <div className="flex justify-around flex-col">
          <div className="min-w-[40%]">
            <article className="mt-24 flex flex-col ">
              <div className="w-3/4 mx-auto">
                <h1 className="text-7xl uppercase">
                  <span className="">Hey, Eu sou o </span>
                  <span>Matheus!</span>
                </h1>
                <p className="text-medium py-4">
                  Seu amigo desenvolvedor{" "}
                  <strong className="uppercase">Full-Stack</strong> apaixonado
                  por programação, que está sempre codando com entusiasmo e um
                  café do lado. Sempre maxímo tentando fazer os melhores{" "}
                  <Link
                    href="/projects"
                    className="uppercase font-bold underline"
                  >
                    Projetos
                  </Link>{" "}
                  tanto FrontEnd quanto no Backend.
                </p>
                <p className="text-medium">
                  Quando não estou programando, você pode me encontrar lendo
                  blogs ou balançando no ritmo do rap e do jazz, perdendo-me no
                  fluxo cativante das melodias.
                </p>
                <Footer label="Ver mais sobre mim" to="/about" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <WavesSVG />
    </>
  );
}

export default Page;
