"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaLocationArrow } from "react-icons/fa";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function SideBar({ isModalOpen }) {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <div className="cursor-default">
      <div className="bg-stone-900/20 fixed top-0 right-0 w-screen h-screen z-[9999]"></div>
      <aside
        className="fixed top-0 right-0 z-[99999] w-[34rem] h-full bg-stone-950 fadeLeft transition-all duration-200 ease-linear"
        aria-label="Sidebar"
      >
        <div class="max-h-full overflow-x-auto px-3 py-4">
          <h1 className="text-white">OPEN</h1>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
/**
 *       <div className="flex-1 p-8 flex flex-col">
        <div>
           <h2 className="text-5xl font-bold">{numberProject}</h2>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-xl font-600 mt-8 hyphens-auto">{description}</p>
        </div>
      </div>

            <div className="mt-4">
            <ul className="list-none flex gap-6 items-end">
              {existLiveDemo && (
                <li>
                  <Link
                    href={liveDemoUrl}
                    target="_black"
                    className="flex items-center gap-3 text-xl uppercase border-b-2 border-b-stone-800 transition-all duration-300 hover:border-b-borderHover hover:text-hoverColor hover:-translate-y-1"
                  >
                    Live demo
                    <FaLocationArrow />
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={seeOnGithubUrl}
                  target="_black"
                  className="flex items-center gap-3 text-xl uppercase border-b-2 border-b-stone-800 transition-all duration-300 hover:border-b-borderHover hover:text-hoverColor hover:-translate-y-1"
                >
                  See on Github
                  <FaGithub />
                </Link>
              </li>
            </ul>
          </div>

 */
