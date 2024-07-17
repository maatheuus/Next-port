import { FaEnvelope, FaLinkedin, FaGithub, FaArrowRight } from "react-icons/fa";
import { ActiveLink } from "@/app/_components/ActiveLink";
import ButtonIcon from "@/app/_components/ButtonIcon";

function Footer({ label, to }) {
  return (
    <div className="flex flex-col justify-between gap-12">
      <br />
      <div>
        <ActiveLink href={to}>
          <p className="text-2xl hover:underline">
            {label}
            <FaArrowRight className="inline w-6 h-6 forward text-svg-fill" />
          </p>
        </ActiveLink>
      </div>

      <div>
        <ul className="list-none flex items-center gap-8">
          <li>
            <ButtonIcon href="mailto:matts14smkd@gmail.com" target="_black">
              <FaEnvelope className="text-svg-fill w-7 h-7" />
            </ButtonIcon>
          </li>

          <li>
            <ButtonIcon
              href="https://www.linkedin.com/in/matheusmaat/"
              target="_black"
            >
              <FaLinkedin className="text-svg-fill w-7 h-7" />
            </ButtonIcon>
          </li>

          <li>
            <ButtonIcon href="https://github.com/maatheuus" target="_black">
              <FaGithub className="text-svg-fill w-7 h-7" />
            </ButtonIcon>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
