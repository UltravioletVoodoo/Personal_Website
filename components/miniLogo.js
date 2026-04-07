import { useState } from "react";
import style from "./styles/miniLogo.module.css";

export default function MiniLogo() {
  // State for whether the animation class is active or not

  const [clicked, setClicked] = useState(false);

  function resetAnimation() {
    setClicked(false);
    setTimeout(() => setClicked(true));
  }

  return (
    <img
      src="/static/img/logo.svg"
      className={`${style.miniLogo}${clicked ? style.spinAnimation : ""}`}
      onClick={resetAnimation}
      id="miniLogo"
    ></img>
  );
}
