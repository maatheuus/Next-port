import { ActiveLink } from "@/components/ActiveLink";

function Navigation() {
  return (
    <div>
      <ul className="flex gap-x-10 items-center text-lg">
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
    </div>
  );
}

export default Navigation;
