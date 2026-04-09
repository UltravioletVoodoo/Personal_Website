import style from "../styles/miniAbout.module.css";

const headerText = `
Software Engineer / Cosplay Enthusiast / Videogame Nerd
`;

const bodyText = `
Scroll down to see some of my web projects, or go to the about page to 
learn more about me and my personal interests.
`;

export default function MiniAbout() {
  return (
    <div className={style.miniAbout}>
      <div>
        <h6>{headerText}</h6>
      </div>
      <div className={style.bodyContent}>
        <p>{bodyText}</p>
      </div>
      <div className={style.footerContent}>
        <a className="btn" href="/about">
          About me
        </a>
      </div>
    </div>
  );
}
