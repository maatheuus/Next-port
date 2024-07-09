"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export function ActiveLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const className = isActive && "hidden";

  return (
    <Link
      href={href}
      className={twMerge(className, "transition-all duration-200")}
    >
      {children}
    </Link>
  );
}
