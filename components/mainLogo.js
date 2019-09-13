import "./mainLogo.css";
import MiniAbout from "../components/miniAbout";

export default function MainLogo() {
    return (
        <div className="logoAboutContainer">
            <img src="/static/img/treasure.svg" className="mainLogo"></img>
            <MiniAbout></MiniAbout>
        </div>
    );
}
