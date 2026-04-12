import { useCallback } from "react";
import { MyButton } from "../components/myButton";
import style from "../styles/miniAbout.module.css";

const headerText = `
Software Engineer / Cosplay Enthusiast / Videogame Nerd
`;

const bodyText = `
Hey there! I'm Jon and this is my personal website. Take a look at my personal projects, or learn more about me and my personal interests in the about page.
`;

export default function MiniAbout() {
  const goToAbout = useCallback(() => {
    window.location.href = "/about";
  }, []);

  return (
    <div className={style.miniAbout}>
      <h4>{headerText}</h4>
      <p>{bodyText}</p>
      <MyButton onClick={goToAbout} text="About Me" />
    </div>
  );
}
