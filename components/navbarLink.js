import { useMemo } from "react";
import style from "../styles/navbarLink.module.css";

export function NavbarLink(props) {
  const { text, href, newTab = false, rightAlign = false } = props;

  const className = useMemo(() => {
    return `${style.link} ${rightAlign ? style.right : ""}`;
  }, [rightAlign]);

  return (
    <a className={className} href={href} target={newTab ? "_blank" : undefined}>
      {text}
    </a>
  );
}
