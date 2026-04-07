import style from "./styles/aboutSection.module.css";

export default function AboutSection(props) {
  return (
    <div>
      <div className={style.desktopDesign}>
        <div>
          <div>
            <img className={style.aboutImage} src={props.photos[0]}></img>
            <img className={style.aboutImage} src={props.photos[1]}></img>
          </div>
          <div>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
          </div>
          <div>
            <img className={style.aboutImage} src={props.photos[2]}></img>
            <img className={style.aboutImage} src={props.photos[3]}></img>
          </div>
        </div>
      </div>

      <div className={style.mobileDesign}>
        <div>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
        </div>
        <div>
          <div>
            <img className={style.aboutImage} src={props.photos[0]}></img>
          </div>
          <div>
            <img className={style.aboutImage} src={props.photos[1]}></img>
          </div>
          <div>
            <img className={style.aboutImage} src={props.photos[2]}></img>
          </div>
          <div>
            <img className={style.aboutImage} src={props.photos[3]}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
