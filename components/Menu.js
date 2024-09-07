import { useOpenMenu } from "@/context/MenuContext";
import { X } from "lucide-react";
import { useEffect } from "react";
import DarkMode from "./navbar/DarkMode";
import { Button } from "./ui/button";
import { Link } from "next-view-transitions";

const listMenu = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Projetos", href: "/projects" },
  { label: "Contato", href: "/contact" },
];

function Menu() {
  const { menuIsOpen, closeMenu } = useOpenMenu();

  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "auto");
  }, [menuIsOpen]);

  return (
    <menu className="fixed top-0 left-0 w-full h-full z-50 fadeTopToBottom transition-all bg-background">
      <div className="absolute right-8 top-20">
        <Button variant="icon" onClick={closeMenu}>
          <X className="w-10 h-10" />
        </Button>
      </div>
      <div className="w-full h-full">
        <ul className="px-2 flex flex-col gap-y-16 items-center justify-center h-full">
          {listMenu.map((item) => (
            <li key={item.label} className="!text-hover">
              <Button variant="ghost" className="text-lg" onClick={closeMenu}>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute right-8 bottom-20">
        <DarkMode className="w-10 h-10" />
      </div>
    </menu>
  );
}

export default Menu;
