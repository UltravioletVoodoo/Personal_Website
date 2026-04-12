import { useCallback } from "react";
import style from "../styles/project.module.css";
import { MyButton } from "./myButton";

export function Project(props) {
  const { btnLink, name, desc, imgSrc } = props;

  const navigate = useCallback(() => {
    window.open(btnLink, "_blank");
  }, [btnLink]);

  return (
    <div className={style.project}>
      <a href={btnLink} target="_blank">
        <img src={imgSrc} className={style.cardImage}></img>
      </a>
      <div className={style.content}>
        <h3 className={style.title}>{name}</h3>
        <p>{desc}</p>
        <div className={style.projectButtonContainer}>
          <MyButton onClick={navigate} text="Visit Site" />
        </div>
      </div>
    </div>
  );
}
