import { FaLocationArrow, FaLinkedin, FaGithub } from "react-icons/fa";
import ButtonIcon from "@/app/_components/ButtonIcon";

function Page() {
  return (
    <section className="h-full ">
      <div className="flex justify-around">
        <div className="border-[1rem] min-w-[40%] h-[50rem] mt-24 flex flex-col">
          <div>
            <h1 className="text-7xl uppercase">
              <span className="block">Hey, Eu sou o </span>
              <span>Matheus.</span>
            </h1>
            <p className="text-2xl mt-3.5 w-3/4">
              Desenvolvedor <strong>full-stack</strong> apaixonado por
              programação, sempre codando com entusiasmo.
            </p>
          </div>

          <div>
            <ul className="list-none flex items-center mt-4 gap-3 text-xl">
              <li>
                <ButtonIcon
                  href="mailto:matts14smkd@gmail.com"
                  className="group flex bg-stone-200 rounded-3xl text-left h-10 p-4 items-center gap-4"
                >
                  <span>Contact me</span>
                  <div className="bg-black rounded-full transition-all duration-150 relative group-hover:scale-[3] w-3 h-3">
                    <FaLocationArrow className="w-4 opacity-0 text-hoverColor group-hover:opacity-100 group-hover:z-10 group-hover:absolute group-hover:scale-[0.4] -left-0.5 -bottom-1 " />
                  </div>
                </ButtonIcon>
              </li>

              <li className="bg-black/80 flex items-center justify-center p-4 w-6 h-6 rounded-full">
                <ButtonIcon href="https://www.linkedin.com/in/matheusmaat/">
                  <FaLinkedin className="text-hoverColor" />
                </ButtonIcon>
              </li>

              <li className="bg-black/80 flex items-center justify-center p-4 w-6 h-6 rounded-full">
                <ButtonIcon href="https://github.com/maatheuus">
                  <FaGithub className="text-hoverColor" />
                </ButtonIcon>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div>IMAGEM</div>
        </div>
      </div>
    </section>
  );
}

export default Page;
