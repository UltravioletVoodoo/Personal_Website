import Base from "../components/base";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ScrollingContent } from "../components/scrollingContent";
import { webProjects, gameProjects } from "../data/projects";
import { ProjectContainer } from "../components/projectContainer";

export default function Projects() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <ScrollingContent>
        <ProjectContainer title={"Websites"} projects={webProjects} />
        <ProjectContainer title={"Games"} projects={gameProjects} />
      </ScrollingContent>
      <Footer></Footer>
    </div>
  );
}
