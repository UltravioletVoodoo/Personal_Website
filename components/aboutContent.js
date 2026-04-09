import AboutSection from "./aboutSection";
import style from "../styles/aboutContent.module.css";

const aboutIntroText = `
My name is Jonathan Bezeau. I am a software engineer with a passion for web development. 
Its ability to create tools and entertainment that are easily accessible for 
anyone on any device anywhere in the world intrigues me. This website was designed 
to be a portfolio, to show off my passion for coding, displaying to the world 
who I am, and what I can do.
`;

const aboutHobbiesText = `
I have always been fascinated by fantasy worlds. As a child, I read books about 
warriors, dragons, wizards, and goblins. This fascination developed into two core hobbies 
in my adult life. Dungeons and Dragons, and Cosplay. In my off time, I can be found 
writing my latest Dungeons and Dragons campaign, or hard at work at my workbench glueing 
and sewing the newest addition to my rapidly growing cosplay collection.
`;

const mePhotoPaths = [
  "/static/img/me1.jpg",
  "/static/img/me2.jpg",
  "/static/img/me3.jpg",
  "/static/img/me4.jpg",
];

const hobbyPhotoPaths = [
  "/static/img/cosplay1.jpg",
  "/static/img/cosplay2.jpg",
  "/static/img/cosplay3.jpg",
  "/static/img/cosplay4.jpg",
];

export default function AboutContent() {
  return (
    <div>
      <div className={style.aboutTitle}>
        <h1>About</h1>
        <hr></hr>
      </div>

      <div className="aboutBody">
        <AboutSection
          title="About Me"
          text={aboutIntroText}
          photos={mePhotoPaths}
        ></AboutSection>

        <hr className={style.divider}></hr>

        <AboutSection
          title="My Hobbies"
          text={aboutHobbiesText}
          photos={hobbyPhotoPaths}
        ></AboutSection>
      </div>
    </div>
  );
}
