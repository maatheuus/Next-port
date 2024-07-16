"use client";

import { createContext, use, useState } from "react";

const MenuContext = createContext({
  menuIsOpen: Boolean,
  openMenu: () => {},
  closeMenu: () => {},
});

function MenuProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => setMenuIsOpen(true);
  const closeMenu = () => setMenuIsOpen(false);

  const valueCtx = {
    menuIsOpen,
    openMenu,
    closeMenu,
  };
  return (
    <MenuContext.Provider value={valueCtx}>{children}</MenuContext.Provider>
  );
}

function useOpenMenu() {
  const context = use(MenuContext);
  return context;
}

export { MenuProvider, useOpenMenu };
