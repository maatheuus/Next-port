"use client";

import AboutMe from "@/landingPage/components/AboutMe";
import ContactMe from "@/landingPage/components/ContactMe";
import Introduction from "@/landingPage/components/Introduction";
import MyProjects from "@/landingPage/components/MyProjects";

function Page() {
  return (
    <>
      <Introduction />
      <div className="grid" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
        <AboutMe />
        <MyProjects />
      </div>
      <ContactMe />
    </>
  );
}

export default Page;
