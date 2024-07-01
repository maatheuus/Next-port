import Projects from "@/app/_components/Projects";
import { projects } from "@/app/_util/utility.js";

function Page() {
  return (
    <section>
      {projects.map((project) => {
        const technology = {
          tech: project.technologyUsed,
          style: project.style,
        };

        return (
          <Projects
            key={project.id}
            numberProject={project.numberProject}
            title={project.title}
            description={project.description}
            image={project.image}
            liveDemoUrl={project.liveDemoUrl}
            existLiveDemo={project.existLiveDemo}
            seeOnGithubUrl={project.seeOnGithubUrl}
            invertImage={project.invertImage}
            technology={technology}
          />
        );
      })}
    </section>
  );
}

export default Page;
