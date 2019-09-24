import "./project.css";

export default function Project(props) {
    
    function checkImg() {
        if (props.imgSrc == null) return "/static/img/placeholder.png";
        return props.imgSrc;
    }

    function checkBtnClasses() {
        if(props.btnLink == null) return "btn disabled";
        return "btn";
    }

    return (
        <div className="col-3 col-lg-4 col-md-6 col-sm-12 col-mx-auto">
            <div className="card myCard">
                <div className="card-image">
                    <img src={checkImg()} className="img-responsive"></img>
                </div>
                <div className="card-header">
                    <div className="card-title h5">{props.name}</div>
                </div>
                <div className="card-body">
                    <p>{props.desc}</p>
                    <div className="card-button">
                        <a 
                            className={checkBtnClasses()}
                            href={props.btnLink}
                            target="_blank"
                            >
                            Visit Site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}