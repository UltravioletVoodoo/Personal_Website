import Base from "../components/base";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ScrollingContent } from "../components/scrollingContent";
import { webProjects, gameProjects } from "../data/projects";
import Project from "../components/project";

export default function Projects() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <ScrollingContent>
        <h2>Websites</h2>
        {webProjects.map((project) => (
          <Project
            name={project.name}
            desc={project.description}
            btnLink={project.href}
            imgSrc={project.src}
          ></Project>
        ))}
        <h2>Games</h2>
        {gameProjects.map((project) => (
          <Project
            name={project.name}
            desc={project.description}
            btnLink={project.href}
            imgSrc={project.src}
          ></Project>
        ))}
      </ScrollingContent>
      <Footer></Footer>
    </div>
  );
}
