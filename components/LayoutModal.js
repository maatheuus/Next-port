import Link from "next/link";
import Image from "next/image";
import { RiArrowLeftCircleLine, RiGithubFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";

function LayoutModal({ project, onClick }) {
  const { title, link, github, technologies, image, about, description } =
    project;

  return (
    <LayoutPage className="max-h-full overflow-x-auto px-9 py-7 flex flex-col gap-6">
      <div className="border-b pb-4">
        <button
          onClick={onClick}
          className="flex items-center justify-between pb-4 w-full"
        >
          <RiArrowLeftCircleLine className="text-svg-fill w-10 h-10" />
          <p className="text-2xl text-btn-color">Go Back</p>
        </button>
      </div>
      <div>
        <h1 className="text-4xl">{title}</h1>
        <p className="text-text-layout text-xl">{description}</p>
      </div>
      <div>
        <Image
          className="object-cover overflow-hidden w-full h-full rounded-lg"
          src={image}
          alt="image of the project"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <div>
        <h3>Sobre</h3>
        <p className="text-text-layout text-xl">{about}</p>
      </div>

      <div>
        <h3>Tecnologias</h3>
        <div className="flex gap-4 flex-wrap">
          {technologies.map((tech, i) => (
            <p
              key={i}
              className="text-lg bg-gray-600 text-stone-200 rounded-xl px-8 py-1 capitalize dark:text-stone-50 dark:bg-gray-500/60"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-7">
          <div className="flex text-3xl gap-x-3">
            <BiWorld className="text-svg-fill" />
            <Link href={link} target="_black">
              <h3 className="uppercase">Website</h3>
            </Link>
          </div>
          <Link
            href={link}
            target="_black"
            className="text-gray-400 text-xl hover:underline"
          >
            {link}
          </Link>
        </div>
        <div>
          <div className="flex text-3xl gap-x-3">
            <RiGithubFill className="text-svg-fill" />
            <Link href={github} target="_black">
              <h3 className="uppercase">Github</h3>
            </Link>
          </div>
          <Link
            href={github}
            target="_black"
            className="text-gray-400 text-xl hover:underline"
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
