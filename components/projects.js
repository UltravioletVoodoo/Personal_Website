import Project from "./project";

export default function Projects() {
    return (
        <div>
            <div className="col-4 col-mx-auto">
                <img src="/static/img/scrollDown.svg"></img>
            </div>
            <div className="columns">
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </div>
        </div>
    );
}