"use client";
import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";
import { ModalProvider } from "@/app/_context/ModalContext";
import { MenuProvider } from "@/app/_context/MenuContext";

function Providers({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), [mounted]);

  if (!mounted) return <ModalProvider>{children}</ModalProvider>;

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <MenuProvider>
        <ModalProvider>{children}</ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default Providers;
