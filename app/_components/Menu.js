import Link from "next/link";
import ToggleTheme from "@/app/_components/ToggleTheme";
import { useOpenMenu } from "@/app/_context/MenuContext";
import { FaXmark } from "react-icons/fa6";

function Menu() {
  const { closeMenu } = useOpenMenu();
  return (
    <menu className="fixed top-0 left-0 w-svw h-svh z-30 fadeTopToBottom transition-all bg-background ease-linear">
      <div className="relative h-[8rem]">
        <button className="absolute z-50 right-14 bottom-0" onClick={closeMenu}>
          <FaXmark className="w-10 h-10" />
        </button>

        <div className="absolute z-50 left-14 -bottom-2">
          <ToggleTheme className="w-10 h-10" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[8.5rem] -translate-x-1/2">
        <ul className="px-10 text-3xl flex flex-col gap-24 items-center justify-center h-full">
          <li className="text-hover ">
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
      </div>
    </menu>
  );
}

export default Menu;
