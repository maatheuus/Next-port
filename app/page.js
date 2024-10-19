"use client";

import BlurryCursor from "@/components/BlurryCursor/BlurryCursor";
import Footer from "@/landingPage/components/Footer";
import AboutMe from "@/landingPage/pages/AboutMe";
import ContactMe from "@/landingPage/pages/ContactMe";
import Introduction from "@/landingPage/pages/Introduction";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import Layout from "./_layout";

function Page() {
  const lenisRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current.destroy();
    };
  }, []);

  return (
    <Layout label="Welcome">
      <div className="container mx-auto py-8 px-2 sm:px-12">
        {/* <BlurryCursor isActive={isActive} /> */}
        <BlurryCursor />
        <Introduction
          onMouseOver={() => {
            setIsActive(true);
          }}
          onMouseLeave={() => {
            setIsActive(false);
          }}
        />
        <AboutMe />
        <ContactMe />
        <Footer />
      </div>
    </Layout>
  );
}

export default Page;
