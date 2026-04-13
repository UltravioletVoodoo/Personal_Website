import Base from "../components/base";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ScrollingContent } from "../components/scrollingContent";
import { webProjects, gameProjects } from "../data/projects";
import { ProjectContainer } from "../components/projectContainer";

const websitesTextSections = [
  `I like to make websites.
From apps that help me run D&D games, to apps to help my friends write poetry, to cute apps I whipped up on a weekend as a tech demo.
Its fun to tackle new puzzles and solve new problems.`,
];

const gamesTextSections = [
  `I love videogames and they say immitation is the most sincere form of flattery.
I love making videogames almost as I like designing them for hours in my head beforehand.
Whenever I get interested enough in a game produced by professional game developers, I start thinking "What would I change if I made this myself?".`,
  `Additionally, I've found it to be an excellent adventure to tackle these bouts of passion in a timeboxed game-jam format, which I've done many times.`,
];

export default function Projects() {
  return (
    <div>
      <Base></Base>
      <Navbar></Navbar>
      <ScrollingContent>
        <ProjectContainer
          title={"Websites"}
          textSections={websitesTextSections}
          projects={webProjects}
        />
        <ProjectContainer
          title={"Games"}
          textSections={gamesTextSections}
          projects={gameProjects}
        />
      </ScrollingContent>
      <Footer></Footer>
    </div>
  );
}
