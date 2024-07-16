"use client";

import { createContext, use, useState } from "react";

const ModalContext = createContext({
  projectIsOpen: Boolean,
  openProject: () => {},
  closeProject: () => {},
});

function ModalProvider({ children }) {
  const [projectIsOpen, setProjectIsOpen] = useState(false);

  const openProject = () => setProjectIsOpen(true);
  const closeProject = () => setProjectIsOpen(false);

  const valueCtx = {
    projectIsOpen,
    openProject,
    closeProject,
  };
  return (
    <ModalContext.Provider value={valueCtx}>{children}</ModalContext.Provider>
  );
}

function useOpenModal() {
  const context = use(ModalContext);
  return context;
}

export { ModalProvider, useOpenModal };
