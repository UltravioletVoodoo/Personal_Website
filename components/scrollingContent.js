import style from "../styles/scrollingContent.module.css";

export function ScrollingContent(props) {
  const { children } = props;
  return <div className={style.scrollingContent}>{children}</div>;
}
