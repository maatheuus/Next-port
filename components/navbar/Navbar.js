import DarkMode from "./DarkMode";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Navbar() {
  return (
    <nav>
      <div className="container flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap px-8 py-8">
        <Logo />
        <Navigation />
        <DarkMode />
      </div>
    </nav>
  );
}

export default Navbar;
