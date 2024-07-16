import Link from "next/link";
import Navigation from "./Navigation";
import ToggleTheme from "./ToggleTheme";

function Header() {
  const nameHeader = "<Matheus />";

  return (
    <header className="py-10 text-2xl">
      <div className="px-10 flex flex-wrap justify-between items-center max-w-[1320px] mx-auto">
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
