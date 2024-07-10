import Image from "next/image";
import { RiArrowLeftCircleLine, RiGithubFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import styled from "styled-components";
import Link from "next/link";

function LayoutModal({ project, onClick }) {
  const { title, link, github, technologies, image, about, description } =
    project;

  return (
    <LayoutPage className="max-h-full overflow-x-auto px-9 py-7 flex flex-col gap-6">
      <div className="border-b flex items-start justify-between pb-4">
        <button onClick={onClick}>
          <RiArrowLeftCircleLine className="text-stone-200 w-10 h-10" />
        </button>
        <h1 className="text-2xl">Go Back</h1>
      </div>
      <div>
        <h2 className="text-4xl">{title}</h2>
        <p className="text-stone-400 text-xl">{description}</p>
      </div>
      <div>
        <Image
          className="object-cover overflow-hidden w-full h-fit rounded-lg"
          src={image}
          alt="image of the project"
          placeholder="blur"
          loading="lazy"
        />
      </div>

      <div>
        <h3>Sobre</h3>
        <p className="text-stone-300 text-xl">{about}</p>
      </div>

      <div>
        <h3>Tecnologias</h3>
        <div className="flex gap-4 flex-wrap">
          {technologies.map((tech, i) => (
            <p
              key={i}
              className="text-lg bg-gray-500/60 rounded-xl px-8 py-1 capitalize text-stone-50"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-7">
          <div className="flex text-3xl gap-x-3">
            <BiWorld className="text-white" />
            <h3 className="uppercase">Website</h3>
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
            <RiGithubFill className="text-white" />
            <h3 className="uppercase">Github</h3>
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
    color: #fff;
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
