import "./aboutContent.css";
import AboutSection from "./aboutSection";

export default function AboutContent() {
    let aboutIntro = 
    `
    My name is Jonathan Bezeau. I am a software engineering student in my final 
    year of study at the University of Victoria. I have a passion for web development. 
    Its ability to create tools and entertainment that are easily accessible for 
    anyone on any device anywhere in the world intrigues me. This website was designed 
    to be a portfolio, to show off my passion for coding, displaying to the world 
    who I am, and what I can do.
    `;

    let aboutHobbies = 
    `
    I have always been fascinated by fantasy worlds. As a child, I read books about 
    warriors, dragons, wizards, and goblins. This fascination developed into two core hobbies 
    in my adult life. Dungeons and Dragons, and Cosplay. In my off time, I can be found 
    writing my latest Dungeons and Dragons campaing, or hard at work at my workbench glueing 
    and sewing the newest addition to my rapidly growing cosplay collection.
    `;
    
    let mePhotos = [
        "/static/img/placeholder.png",
        "/static/img/placeholder.png",
        "/static/img/placeholder.png",
        "/static/img/placeholder.png"
    ];

    let hobbyPhotos = [
        "/static/img/placeholder.png",
        "/static/img/placeholder.png",
        "/static/img/placeholder.png",
        "/static/img/placeholder.png"
    ];

    return (
        <div>

            <div className="aboutTitle">
                <h1>About</h1>
                <hr></hr>
            </div>

            <div className="aboutBody">

                <AboutSection
                    title="About Me"
                    text={aboutIntro}
                    photos={mePhotos}
                    >
                </AboutSection>

                <AboutSection
                    title="My Hobbies"
                    text={aboutHobbies}
                    photos={hobbyPhotos}
                    >
                </AboutSection> 

            </div>
        </div>
    );
}