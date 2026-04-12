import style from "../styles/myButton.module.css";

export function MyButton(props) {
  const { text, onClick } = props;

  return (
    <button className={style.myButton} onClick={onClick}>
      {text}
    </button>
  );
}
