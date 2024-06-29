import Link from "next/link";
import Navigation from "./Navigation";

function Header() {
  const nameHeader = "<Matheus />";

  return (
    <header className="px-8 py-5 border-b border-black">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1>
          <Link href="/">{nameHeader}</Link>
        </h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
