import { Project } from "./project";
import style from "../styles/projectContainer.module.css";
import { ContentSection } from "./contentSection";

export function ProjectContainer(props) {
  const { title, textSections, projects } = props;

  return (
    <ContentSection title={title} textSections={textSections}>
      <div className={style.projects}>
        {projects.map((project, index) => (
          <Project
            name={project.name}
            desc={project.description}
            btnLink={project.href}
            imgSrc={project.src}
            key={`${title}-photo-${index}`}
          ></Project>
        ))}
      </div>
    </ContentSection>
  );
}
