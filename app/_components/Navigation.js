import { ActiveLink } from "./ActiveLink";

function Navigation() {
  return (
    <nav className="z-10">
      <ul className="flex gap-5 items-center">
        <li className="text-hover">
          <ActiveLink href="/about">Sobre</ActiveLink>
        </li>
        <li className="text-hover">
          <ActiveLink href="/projects">Projetos</ActiveLink>
        </li>
        <li className="text-hover">
          <ActiveLink href="/contact">Contato</ActiveLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
