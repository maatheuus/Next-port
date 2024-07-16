"use client";

import { createContext, use, useEffect, useRef, useState } from "react";

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

function useClickOutside(close) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) close();
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [close]);

  return ref;
}

export { ModalProvider, useOpenModal, useClickOutside };
