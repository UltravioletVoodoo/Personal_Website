import MiniLogo from "./miniLogo";
import style from "./styles/navbar.module.css";

export default function Navbar() {
  return (
    <div>
      <header className={style.myNavbar}>
        <section>
          <a className={style.home} href="/">
            Home
          </a>
          <a className={style.about} href="/about">
            About
          </a>
          <a className={style.jams} href="/jams">
            Game Jams
          </a>
        </section>
        <section>
          <MiniLogo className={style.miniLogo}></MiniLogo>
        </section>
        <section>
          <a
            className={style.resume}
            href="/static/publicFiles/resume.pdf"
            target="_blank"
          >
            Résumé
          </a>
        </section>
      </header>
    </div>
  );
}
