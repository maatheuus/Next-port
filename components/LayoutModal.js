import { useOpenModal } from "@/context/ModalContext";
import { CircleChevronLeft, Github, Globe } from "lucide-react";
import Link from "next/link";
import styled from "styled-components";

function LayoutModal({ project }) {
  const { title, link, github, technologies, image, about, description } =
    project;

  const { closeProject } = useOpenModal();

  return (
    <LayoutPage className="max-h-full overflow-x-auto px-9 py-7 flex flex-col gap-6 z-[9999]">
      <div className="border-b pb-4">
        <button
          onClick={closeProject}
          className="flex items-center justify-between pb-4 w-full"
        >
          <CircleChevronLeft className="text-svg-fill w-7 h-7" />
          <p className="text-2xl text-btn-color">Go Back</p>
        </button>
      </div>
      <div>
        <h1 className="text-2xl">{title}</h1>
        <p className="text-text-layout text-base">{description}</p>
      </div>
      <div>
        <img
          className="object-cover overflow-hidden w-full h-full rounded-lg"
          src={image?.src}
          alt={`${title} image`}
          width={400}
          height={400}
        />
      </div>
      <div>
        <h2 className="text-2xl">Sobre</h2>
        <p className="text-text-layout text-base">{about}</p>
      </div>
      <div>
        <h2 className="text-2xl">Tecnologias</h2>
        <div className="flex gap-4 flex-wrap">
          {technologies?.map((tech, i) => (
            <p
              key={i}
              className="text-base bg-gray-600 text-stone-200 rounded-xl px-6 py-0.5 capitalize dark:text-stone-50 dark:bg-gray-500/60"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
      <div>
        <div className="mb-7">
          <div className="flex gap-x-3">
            <Globe className="w-6 h-6 text-svg-fill" />
            <Link href={link || ""} target="_black">
              <h3 className="uppercase text-base">Website</h3>
            </Link>
          </div>
          <Link
            href={link || ""}
            target="_black"
            className="text-gray-400 text-base hover:underline"
          >
            {link}
          </Link>
        </div>
        <div>
          <div className="flex gap-x-3">
            <Github className="w-6 h-6 text-svg-fill" />
            <Link href={github || ""} target="_black">
              <h3 className="uppercase text-base">Github</h3>
            </Link>
          </div>
          <Link
            href={github || ""}
            target="_black"
            className="text-gray-400 text-base hover:underline"
          >
            {github}
          </Link>
        </div>
      </div>
    </LayoutPage>
  );
}

export default LayoutModal;

const LayoutPage = styled.div`
  h1,
  h2,
  h3 {
    /* color: #fff; */
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
