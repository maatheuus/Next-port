"use client";

import AboutMe from "@/landingPage/pages/AboutMe";
import ContactMe from "@/landingPage/pages/ContactMe";
import Introduction from "@/landingPage/pages/Introduction";
import MyProjects from "@/landingPage/pages/MyProjects";

function Page() {
  return (
    <>
      <Introduction />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2"> */}
      <AboutMe />
      {/* <MyProjects /> */}
      {/* </div> */}
      <ContactMe />
    </>
  );
}

export default Page;
