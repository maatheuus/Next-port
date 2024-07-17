import { Link } from "next-view-transitions";
import { twMerge } from "tailwind-merge";

function ButtonIcon({ href, variation, className, children, ...props }) {
  const base = "flex items-center gap-x-4";

  const styles = {
    primary: base,
    secondary: base + "",
  };

  if (href)
    return (
      <Link
        href={href}
        className={twMerge(styles[variation], className)}
        {...props}
      >
        {children}
      </Link>
    );

  return (
    <button className={twMerge(styles[variation], className)} {...props}>
      {children}
    </button>
  );
}

export default ButtonIcon;
