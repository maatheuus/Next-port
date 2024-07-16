"use client";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/app/_context/ModalContext";
import { ToggleThemeProvider } from "@/app/_context/ToggleThemeContext";
import { useEffect, useState } from "react";

function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [mounted]);

  if (!mounted)
    return (
      <>
        <ModalProvider>{children}</ModalProvider>
      </>
    );

  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <ModalProvider>{children}</ModalProvider>
    </ThemeProvider>
  );
}

export default Providers;
