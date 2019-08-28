export default function Project() {
    return (
        <div className="card">
            <div className="card-image">
                <img src="/static/img/placeholder.png" className="img-responsive"></img>
            </div>
            <div className="card-header">
                <div className="card-title h5">Project Name</div>
            </div>
            <div className="card-body">
                <p>Project description...</p>
                <button className="btn">Visit Site</button>
            </div>
        </div>
    );
}