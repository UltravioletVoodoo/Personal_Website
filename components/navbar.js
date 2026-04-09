import MiniLogo from "./miniLogo";
import { NavbarLink } from "./navbarLink";
import style from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div className={style.navbarContents}>
        <NavbarLink text="About" href="/about" />
        <MiniLogo />
        <NavbarLink text="Projects" href="/jams" />
      </div>
    </div>
  );
}
