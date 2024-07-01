import Image from "next/image";

import node from "@/public/svg/node-js-logo.svg";
import next from "@/public/svg/next-js-logo.svg";
import react from "@/public/svg/react-logo.svg";
import mongodb from "@/public/svg/mongodb-logo.svg";
import javaScript from "@/public/svg/javaScript-logo.svg";
import express from "@/public/svg/express-logo.svg";
import redux from "@/public/svg/redux-logo.svg";
import tailwind from "@/public/svg/tailwind-logo.svg";
import sass from "@/public/svg/sass-logo.svg";

function Skills() {
  const logos = [
    { src: node, alt: "Node.Js logo" },
    { src: next, alt: "Next.Js logo" },
    { src: react, alt: "React.Js logo" },
    { src: mongodb, alt: "MongoDB logo" },
    { src: javaScript, alt: "JavaScript logo" },
    { src: express, alt: "Express logo" },
    { src: redux, alt: "Redux logo" },
    { src: tailwind, alt: "Tailwind logo" },
    { src: sass, alt: "Sass logo" },
  ];
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-14 animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-14 animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
