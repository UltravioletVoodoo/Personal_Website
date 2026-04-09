import { useState } from "react";
import style from "./styles/miniLogo.module.css";

export default function MiniLogo() {
  const [clicked, setClicked] = useState(false);

  function animateAndGoHome() {
    setClicked(true);
    setTimeout(() => (window.location.href = "/"), 700);
  }

  return (
    <img
      src="/static/img/logo.svg"
      className={`${style.miniLogo} ${clicked ? style.spinAnimation : ""}`}
      onClick={animateAndGoHome}
      id="miniLogo"
    ></img>
  );
}
