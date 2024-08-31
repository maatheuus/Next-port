"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import ButtonIcon from "@/app/_components/ButtonIcon";

function ToggleTheme({ className }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  }

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className="inline-flex items-center relative cursor-pointer">
      <ButtonIcon
        onClick={toggleTheme}
        className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-stone-900 dark:hover:bg-stone-50 transition-all duration-200 group"
      >
        {theme === "dark" ? (
          <FaSun
            className={twMerge(
              "fill-svg-fil group-hover:fill-stone-900 w-8 h-6",
              className
            )}
          />
        ) : (
          <FaMoon
            className={twMerge(
              "fill-svg-fill group-hover:fill-stone-50 w-8 h-6",
              className
            )}
          />
        )}
      </ButtonIcon>
    </div>
  );
}

export default ToggleTheme;
