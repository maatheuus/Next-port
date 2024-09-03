import { FaXmark } from "react-icons/fa6";
import { useOpenMenu } from "@/context/MenuContext";
import ToggleTheme from "./navbar/DarkMode";
import ButtonIcon from "./ButtonIcon";
import Button from "./Button";

function Menu() {
  const { closeMenu } = useOpenMenu();
  return (
    <menu className="fixed top-0 left-0 w-svw h-svh z-30 fadeTopToBottom transition-all bg-background ease-linear">
      <div className="relative h-[8rem]">
        <ButtonIcon
          className="absolute z-50 right-14 bottom-0"
          onClick={closeMenu}
        >
          <FaXmark className="w-10 h-10" />
        </ButtonIcon>

        <div className="absolute z-50 left-14 -bottom-2">
          <ToggleTheme className="w-10 h-10" />
        </div>
      </div>

      <div className="absolute left-1/2 top-[8.5rem] -translate-x-1/2">
        <ul className="px-10 text-3xl flex flex-col gap-24 items-center justify-center h-full">
          <li className="text-hover ">
            <Button onClick={closeMenu} href="/">
              Home
            </Button>
          </li>
          <li className="text-hover">
            <Button onClick={closeMenu} href="/about">
              Sobre
            </Button>
          </li>
          <li className="text-hover">
            <Button onClick={closeMenu} href="/projects">
              Projetos
            </Button>
          </li>
          <li className="text-hover">
            <Button onClick={closeMenu} href="/contact">
              Contato
            </Button>
          </li>
        </ul>
      </div>
    </menu>
  );
}

export default Menu;
