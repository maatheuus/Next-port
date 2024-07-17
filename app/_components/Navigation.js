import { ActiveLink } from "./ActiveLink";
import ToggleTheme from "./ToggleTheme";

function Navigation() {
  return (
    <nav className="z-10">
      <ul className="flex gap-5 items-center text-medium">
        <li className="text-hover">
          <ActiveLink href="/about">Sobre</ActiveLink>
        </li>
        <li className="text-hover">
          <ActiveLink href="/projects">Projetos</ActiveLink>
        </li>
        <li className="text-hover">
          <ActiveLink href="/contact">Contato</ActiveLink>
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
