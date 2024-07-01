import Link from "next/link";
import Navigation from "./Navigation";
import ToggleTheme from "./ToggleTheme";

function Header() {
  const nameHeader = "<Matheus />";

  return (
    <header className="px-8 py-4 text-2xl">
      <div className="px-4 flex justify-between items-center max-w-7xl mx-auto">
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
