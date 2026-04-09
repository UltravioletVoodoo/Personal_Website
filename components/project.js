import style from "../styles/project.module.css";

export default function Project(props) {
  const { btnLink, name, desc, imgSrc } = props;

  return (
    <div>
      <div className={style.myCard}>
        <a href={btnLink} target="_blank">
          <img
            src={imgSrc ?? "/static/img/placeholder.png"}
            className={style.cardImage}
          ></img>
        </a>
        <div>
          <div>{name}</div>
        </div>
        <div>
          <p>{desc}</p>
          <div>
            <a href={btnLink} target="_blank">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
