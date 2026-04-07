import MiniAbout from "../components/miniAbout";
import style from "./styles/mainLogo.module.css";

export default function MainLogo() {
  return (
    <div className={style.logoAboutContainer}>
      <img src="/static/img/treasure.svg" className={style.mainLogo}></img>
      <h3 className={style.myName}>Jonathan Bezeau</h3>
      <MiniAbout></MiniAbout>
    </div>
  );
}
