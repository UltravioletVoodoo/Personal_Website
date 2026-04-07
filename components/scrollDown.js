import style from "./styles/scrollDown.module.css";

export default function ScrollDown() {
  return (
    <div>
      <div>
        <div className={style.scrollDown}>
          <img
            src="/static/img/scrollDown.svg"
            className={style.scrollArrow}
          ></img>
        </div>
      </div>
    </div>
  );
}
