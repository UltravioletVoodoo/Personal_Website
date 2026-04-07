import style from "./styles/footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={style.footer}>
        <div>
          <div>
            <div>
              <div className={style.logoContainer}>
                <a
                  href="https://github.com/UltravioletVoodoo/Personal_Website"
                  target="_blank"
                >
                  <img
                    className={style.logo}
                    src="/static/img/github-logo.svg"
                  ></img>
                </a>
              </div>
              <div className={style.logoContainer}>
                <a
                  href="https://www.linkedin.com/in/jonathan-bezeau-b04537194/"
                  target="_blank"
                >
                  <img
                    className={style.logo}
                    src="/static/img/linkedin-logo.svg"
                  ></img>
                </a>
              </div>
              <div className={style.logoContainer}>
                <a
                  href="https://www.facebook.com/jonathan.bezeau.7"
                  target="_blank"
                >
                  <img
                    className={style.logo}
                    src="/static/img/facebook-logo.svg"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
