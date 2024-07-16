import { ActiveLink } from "@/app/_components/ActiveLink";
import ButtonIcon from "@/app/_components/ButtonIcon";
import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";

function Footer({ label, to }) {
  return (
    <>
      <br />
      <div className="mt-4 flex flex-col justify-between gap-12">
        <div>
          <ActiveLink href={to}>
            <p className="text-xl hover:underline">
              {label}
              <FaArrowRight className="inline w-6 h-6 forward text-svg-fill" />
            </p>
          </ActiveLink>
        </div>

        <div>
          <ul className="list-none flex items-center gap-8">
            <li>
              <ButtonIcon href="mailto:matts14smkd@gmail.com">
                <FaEnvelope className="text-svg-fill w-6 h-6" />
              </ButtonIcon>
            </li>

            <li>
              <ButtonIcon href="https://www.linkedin.com/in/matheusmaat/">
                <FaLinkedin className="text-svg-fill w-6 h-6" />
              </ButtonIcon>
            </li>

            <li>
              <ButtonIcon href="https://github.com/maatheuus">
                <FaGithub className="text-svg-fill w-6 h-6" />
              </ButtonIcon>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
