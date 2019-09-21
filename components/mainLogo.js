import "./mainLogo.css";
import MiniAbout from "../components/miniAbout";

export default function MainLogo() {
    return (
        <div className="columns">
            <div className="col-md-12 col-lg-10 col-8 col-mx-auto">
                <div className="logoAboutContainer">
                    <img src="/static/img/treasure.svg" className="mainLogo"></img>
                    <MiniAbout></MiniAbout>
                </div>
            </div>
        </div>
    );
}