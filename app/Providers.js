"use client";
import { useEffect, useState } from "react";
import { ModalProvider } from "@/app/_context/ModalContext";
import { MenuProvider } from "@/app/_context/MenuContext";
import { ThemeProvider } from "./theme-provider";

function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [mounted]);

  if (!mounted) return <ModalProvider>{children}</ModalProvider>;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MenuProvider>
        <ModalProvider>{children}</ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default Providers;
