import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

function Projects(props) {
  const {
    reverseRow,
    numberProject,
    title,
    description,
    image,
    liveDemoUrl,
    existLiveDemo,
    seeOnGithubUrl,
    technologies,
  } = props;

  const base = "text-lg border rounded-3xl px-8 py-1 capitalize font-bold";

  const className = {
    react: " bg-[#5ED3F3]/60 text-blue-500",
    javaScript: " bg-yellow-300/60",
    supabase: " bg-green-400/60 text-stone-950",
    tailwind: " bg-[#38BDF8]/60 text-blue-900",
    html: " bg-orange-600/60",
    css: " bg-blue-600/60",
    sass: " bg-[#C76494]",
    mongoDB: " bg-[#00121A]/60 text-[#00ED64]",
    nodeJs: " bg-green-400/60 text-green-600",
    express: " bg-stone-900/60 text-stone-100",
    redux: " bg-[#7147B3]/60 text-[#41286a]",
  };

  return (
    <div
      className={`w-full h-fit my-12 mx-auto flex flex-col-reverse md:flex-row 
      ${reverseRow && "md:flex-row-reverse"}`}
    >
      <div className="overflow-hidden rounded-xl max-w-xl h-auto mx-auto">
        <Image
          className="w-full object-fill h-auto"
          src={image}
          alt="image of the project"
          placeholder="blur"
        />
      </div>

      <div className="flex-1 p-8 flex flex-col">
        <div>
          <h2 className="text-5xl font-bold">{numberProject}</h2>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="text-xl font-600 mt-8 hyphens-auto">{description}</p>
        </div>

        <div className="flex gap-3 my-4 flex-wrap">
          {technologies.map((tech, index) => (
            <p key={index} className={twMerge(base, className[tech])}>
              {tech}
            </p>
          ))}
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
      </div>
    </div>
  );
}

export default Projects;
