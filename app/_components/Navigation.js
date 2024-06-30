import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 ">
      <ul className="flex gap-5 items-center">
        <li className="text-hover">
          <Link href="/">Home</Link>
        </li>
        <li className="text-hover">
          <Link href="/about">Sobre</Link>
        </li>
        <li className="text-hover">
          <Link href="/projects">Projetos</Link>
        </li>
        <li className="text-hover">
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
