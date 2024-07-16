"use client";

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeSwitcher from "@/app/_context/ToggleThemeContext";

function ToggleTheme() {
  // const { setTheme, theme } = useToggleTheme();
  const [dark, setDark] = useState(false);

  function toggleTheme() {
    setDark(!dark);
    // setTheme(dark ? "light" : "dark");
    // console.log(theme);
  }
  // console.log(dark);

  return (
    <div className="inline-flex items-center relative cursor-pointer p-1">
      {/* <button onClick={toggleTheme}>
        {dark ? (
          <FaSun
            id="Layer_1"
            className="fill-stone-950 opacity-90 peer-checked:opacity-0 w-5 h-5"
          />
        ) : (
          <FaMoon id="Layer_2" className=" fill-stone-950 w-5 h-5 " />
        )}
      </button> */}
    </div>
  );
}

export default ToggleTheme;
