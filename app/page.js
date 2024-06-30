import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ButtonIcon from "@/app/_components/ButtonIcon";

function Page() {
  return (
    <section>
      <div>
        <div>
          <h1 className="content-section__introduction-title numans-regular">
            <span className="">Hey, Eu sou o </span>
            <span>Matheus.</span>
          </h1>
          <p className="">
            Desenvolvedor <strong>full-stack</strong> apaixonado por
            programação, sempre codando com entusiasmo.
          </p>
        </div>

        <div>
          <ul className="section-list__buttons">
            <li>
              <ButtonIcon href="mailto:matts14smkd@gmail.com">
                <span>Contact me</span>
                <div>
                  <FaEnvelope />
                </div>
              </ButtonIcon>
            </li>

            <li>
              <ButtonIcon href="https://www.linkedin.com/in/matheusmaat/">
                <FaLinkedin />
              </ButtonIcon>
            </li>

            <li>
              <ButtonIcon href="https://github.com/maatheuus">
                <FaGithub />
              </ButtonIcon>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>IMAGEM</div>
      </div>
    </section>
  );
}

export default Page;
