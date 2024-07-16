"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import LayoutModal from "@/app/_components/LayoutModal";
import { projects } from "@/app/_util/utility";
import { useOpenModal } from "@/app/_context/ModalContext";

function SideBar({ id }) {
  const modalRef = useRef();
  const curProject = projects.find((project) => project.id === id);

  const { projectIsOpen, closeProject } = useOpenModal();

  useEffect(() => {
    if (projectIsOpen) {
      modalRef.current.showModal();
      document.body.style.overflow = "hidden";
    }

    return () => (document.body.style.overflow = "auto");
  }, [projectIsOpen]);

  if (!projectIsOpen) return;
  return createPortal(
    <dialog ref={modalRef} onClose={closeProject}>
      <div className="bg-stone-900/50 fixed top-0 right-0 w-screen h-screen z-[9999]"></div>
      <aside
        className="fixed top-0 right-0 z-[99999] w-screen md:w-[470px] h-full bg-stone-950 fadeLeft transition-all duration-200 ease-linear"
        aria-label="Sidebar"
      >
        <LayoutModal project={curProject} onClick={closeProject} />
      </aside>
    </dialog>,
    document.getElementById("modal")
  );
}

export default SideBar;
