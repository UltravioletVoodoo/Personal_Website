import Project from "./project";

export default function Projects() {
    return (
        <div>
            <div className="col-4 col-mx-auto">
                <p>Down Arrow</p>
        </div>
        <div className="columns">
            <div className="col-6">
                <Project></Project>
            </div>
            <div className="col-6">
                <Project></Project>
            </div>
            <div className="col-6 col-mx-auto">
                <Project></Project>
            </div>
        </div>
        </div>
    );
}