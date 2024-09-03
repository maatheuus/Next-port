import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { ActiveLink } from "./ActiveLink";
import ButtonIcon from "./ButtonIcon";

function Footer({ label, to }) {
  return (
    <div className="flex flex-col justify-between gap-12">
      <br />
      <div>
        <ActiveLink href={to}>
          <p className="text-lg hover:underline">
            {label}
            <FaArrowRight className="inline w-4 h-4 forward text-svg-fill" />
          </p>
        </ActiveLink>
      </div>

      <div>
        <ul className="list-none flex items-center gap-8">
          <li>
            <ButtonIcon href="mailto:matts14smkd@gmail.com" target="_black">
              <FaEnvelope className="text-svg-fill w-5 h-5" />
            </ButtonIcon>
          </li>

          <li>
            <ButtonIcon
              href="https://www.linkedin.com/in/matheusmaat/"
              target="_black"
            >
              <FaLinkedin className="text-svg-fill w-5 h-5" />
            </ButtonIcon>
          </li>

          <li>
            <ButtonIcon href="https://github.com/maatheuus" target="_black">
              <FaGithub className="text-svg-fill w-5 h-5" />
            </ButtonIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
