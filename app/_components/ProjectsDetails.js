import Image from "next/image";
import { twMerge } from "tailwind-merge";

function ProjectsDetails(props) {
  const { title, description, image, technologies, classImg } = props;

  return (
    <div className="h-full mx-auto">
      <div className={twMerge("image-hover", classImg)}>
        <Image
          src={image}
          loading="lazy"
          alt={`image of the ${title}`}
          placeholder="blur"
          height={500}
          width={500}
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
  );
}

export default ProjectsDetails;
