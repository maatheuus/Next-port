import Link from "next/link";

function ButtonIcon({ href, variation, className, children, ...props }) {
  const base =
    "flex items-center gap-x-4 text-gray-primary text-sm hover:text-primary transition-colors duration-200";

  const styles = {
    primary: base,
    secondary:
      "text-stone-600 gap-4 bg-transparent border border-gray-primary/40 hover:border-gray-primary/80 font-medium rounded-md text-md px-5 py-2.5 flex items-center",
  };

  if (href)
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

export default ButtonIcon;
