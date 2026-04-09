import style from "./styles/socialMediaIcon.module.css";

export function SocialMediaIcon(props) {
  const { alt, href, imgPath } = props;

  return (
    <a href={href} target="_blank" title={alt}>
      <img src={imgPath} className={style.icon}></img>
    </a>
  );
}
