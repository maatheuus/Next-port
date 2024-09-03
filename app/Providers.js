"use client";
import { ModalProvider } from "@/context/ModalContext";
import { MenuProvider } from "@/context/MenuContext";
import { ThemeProvider } from "./theme-provider";

function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <MenuProvider>
        <ModalProvider>{children}</ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  );
}

export default Providers;
