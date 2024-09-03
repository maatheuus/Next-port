import { Link } from "next-view-transitions";
import { Button } from "../ui/button";

function Logo() {
  const nameHeader = "<Maat />";
  return (
    <Button variant="ghost" className="text-2xl" asChild>
      <Link href="/">{nameHeader}</Link>
    </Button>
  );
}

export default Logo;
