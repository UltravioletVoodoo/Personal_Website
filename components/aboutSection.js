import "./aboutSection.css";

export default function AboutSection(props) {
    return (
        <div className="aboutSection">

            <div className="desktopDesign">
                <div className="columns">
                    <div className="col-3">
                        <img src={props.photos[0]}></img>
                        <img src={props.photos[1]}></img>
                    </div>
                    <div className="col-6">
                        <h2>{props.title}</h2>
                        <p>{props.text}</p>
                    </div>
                    <div className="col-3">
                        <img src={props.photos[2]}></img>
                        <img src={props.photos[3]}></img>
                    </div>
                </div>
            </div>

            <div className="mobileDesign">
                <div className="col-12">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
                <div className="columns">
                    <div className="col-3">
                        <img src={props.photos[0]}></img>
                    </div>
                    <div className="col-3">
                        <img src={props.photos[1]}></img>
                    </div>
                    <div className="col-3">
                        <img src={props.photos[2]}></img>
                    </div>
                    <div className="col-3">
                        <img src={props.photos[3]}></img>
                    </div>
                </div>
            </div>
            
        </div>
    );
}