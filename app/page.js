"use client";

import AboutMe from "@/landingPage/components/AboutMe";
import ContactMe from "@/landingPage/components/ContactMe";
import Introduction from "@/landingPage/components/Introduction";
import MyProjects from "@/landingPage/components/MyProjects";

function Page() {
  return (
    <>
      <Introduction />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <AboutMe />
        <MyProjects />
      </div>
      <ContactMe />
    </>
  );
}

export default Page;
