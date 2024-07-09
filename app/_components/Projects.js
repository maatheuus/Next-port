import SideBar from "./SideBar";
import Image from "next/image";

function Projects(props) {
  const { title, description, image, technologies, open } = props;

  return (
    <>
      <div className="h-fit my-12 mx-auto">
        <div className="image-hover">
          <Image
            src={image}
            alt="image of the project"
            placeholder="blur"
            loading="lazy"
          />
          <div className="content-hidden flex flex-col text-left gap-7">
            <h1 className="text-stone-50 text-3xl font-semibold">{title}</h1>
            <p className="text-stone-50 text-xl font-600 hyphens-auto">
              {description}
            </p>
            <div className="flex gap-3 flex-wrap">
              {technologies.map((tech, index) => (
                <p
                  key={index}
                  className="text-lg bg-gray-500/60 rounded-3xl px-8 py-1 capitalize text-stone-50"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {open && <SideBar isModalOpen={open} />}
    </>
  );
}

export default Projects;
