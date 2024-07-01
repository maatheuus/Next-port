import Link from "next/link";
import Navigation from "./Navigation";
import ToggleTheme from "./ToggleTheme";

function Header() {
  const nameHeader = "<Matheus />";

  return (
    <header className="px-8 py-4 border-b border-black text-2xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1>
          <Link href="/">{nameHeader}</Link>
        </h1>
        <Navigation />
        <ToggleTheme />
      </div>
    </header>
  );
}

export default Header;
