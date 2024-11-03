import Menu from "@/components/menu/Menu";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="relative pt-6">
      <nav>
        <div className="container flex flex-row justify-between px-8 py-8">
          <Logo />
        </div>
      </nav>
      <Menu />
    </div>
  );
}

export default Navbar;
