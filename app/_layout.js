"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Layout({ label, children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (() => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {/* {isLoading && <Preloader label={label} />} */}
      </AnimatePresence>
      {children}
    </>
  );
}

export default Layout;
