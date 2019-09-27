import "./mainLogo.css";
import MiniAbout from "../components/miniAbout";

export default function MainLogo() {
    return (
        <div className="logoAboutContainer">
            <img src="/static/img/treasure.svg" className="mainLogo"></img>
            <h3 className="myName">Jonathan Bezeau</h3>
            <MiniAbout></MiniAbout>
        </div>
        
    );
}