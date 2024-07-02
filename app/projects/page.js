import Projects from "@/app/_components/Projects";
import { projects } from "@/app/_util/utility.js";

function Page() {
  return (
    <section className="w-full h-full bg-stone-100">
      {projects.map((project) => {
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
            reverseRow={project.invertImage}
            technologies={project.technologies}
          />
        );
      })}
    </section>
  );
}

export default Page;
