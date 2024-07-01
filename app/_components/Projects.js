import Image from "next/image";
import { FaGithub, FaLocationArrow } from "react-icons/fa";

function Projects(props) {
  const {
    invertImage,
    numberProject,
    title,
    description,
    image,
    liveDemoUrl,
    existLiveDemo,
    seeOnGithubUrl,
    technology,
  } = props;

  let projects = "projects";

  if (invertImage) {
    projects += " invert-direction";
  }

  return (
    <div className={projects}>
      <div className="projects__images">
        <Image src={image} alt="image of the project" placeholder="blur" />
      </div>

      <div className="projects__content">
        <div className="projects-description">
          <h2 className="projects-description__title--number baloo-bhaijaan ">
            {numberProject}
          </h2>
          <h3 className="projects-description__title--project baloo-bhaijaan ">
            {title}
          </h3>
          <p className="projects-description__text noticia-text-regular">
            {description}
          </p>
        </div>

        <div className="projects__icons">
          {/* <IconsTech iconsTech={technology} /> */}
        </div>

        <div className="links">
          <ul className="links__list">
            {existLiveDemo && (
              <li>
                <a
                  href={liveDemoUrl}
                  target="_black"
                  className="links__link link-style numans-regular"
                >
                  Live demo
                  <FaLocationArrow className="svg" />
                </a>
              </li>
            )}
            <li>
              <a
                href={seeOnGithubUrl}
                target="_black"
                className="links__link link-style numans-regular"
              >
                See on Github
                <FaGithub className="svg" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
