"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  console.log(theme);

  return (
    <div>
      The current theme is: {theme}
      <br />
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <br />
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
    </div>
  );
}
export default ThemeSwitcher;

// const ToggleThemeContext = createContext({
//   theme: undefined,
//   setTheme: () => {},
// });

// const initialState = "";

// function ToggleThemeProvider({ children }) {
//   const [theme, setTheme] = useState(initialState);

//   const ctxValue = { theme, setTheme };
//   return (
//     <ToggleThemeContext.Provider value={ctxValue}>
//       {children}
//     </ToggleThemeContext.Provider>
//   );
// }

// function useToggleTheme() {
//   const context = useContext(ToggleThemeContext);

//   if (context === undefined) return;
//   return context;
// }

// export { ToggleThemeProvider, useToggleTheme };
