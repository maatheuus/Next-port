import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-10 items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/projects">Projetos</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
