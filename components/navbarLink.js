import style from "../styles/navbarLink.module.css";

export function NavbarLink(props) {
  const { text, href, newTab = false } = props;

  return (
    <a
      className={style.link}
      href={href}
      target={newTab ? "_blank" : undefined}
    >
      {text}
    </a>
  );
}
