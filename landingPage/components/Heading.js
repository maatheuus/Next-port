import { twMerge } from "tailwind-merge";

function Heading({ label, className }) {
  return <h1 className={twMerge("text-2xl font-bold", className)}>{label}</h1>;
}

export default Heading;
