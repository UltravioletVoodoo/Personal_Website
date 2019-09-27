import "./miniAbout.css";

export default function MiniAbout() {
    let headerText = 
    `
    Software Engineer / Cosplay Enthusiast / Videogame Nerd
    `;
    
    let bodyText = 
    `
    Scroll down to see some of my web projects, or go to the about page to 
    learn more about me and my personal interests.
    `;

    return (
        <div className="miniAbout">
            <div className="headerContent">
                <h6>{headerText}</h6>
            </div>
            <div className="bodyContent">
                <p>{bodyText}</p>
            </div>
            <div className="footerContent">
                <a className="btn" href="/about">About me</a>
            </div>
        </div>
    );
}