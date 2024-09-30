"use client";

import Footer from "@/landingPage/components/Footer";
import AboutMe from "@/landingPage/pages/AboutMe";
import ContactMe from "@/landingPage/pages/ContactMe";
import Introduction from "@/landingPage/pages/Introduction";

function Page() {
  return (
    <>
      <Introduction />
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Page;
