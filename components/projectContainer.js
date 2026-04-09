import { Project } from "./project";
import style from "../styles/projectContainer.module.css";

export function ProjectContainer(props) {
  const { title, projects } = props;

  return (
    <div className={style.projectContainer}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.projects}>
        {projects.map((project) => (
          <Project
            name={project.name}
            desc={project.description}
            btnLink={project.href}
            imgSrc={project.src}
          ></Project>
        ))}
      </div>
    </div>
  );
}
