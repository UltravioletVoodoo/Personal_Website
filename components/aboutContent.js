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
    writing my latest Dungeons and Dragons campaign, or hard at work at my workbench glueing 
    and sewing the newest addition to my rapidly growing cosplay collection.
    `;
    
    let mePhotos = [
        "/static/img/me1.jpg",
        "/static/img/me2.jpg",
        "/static/img/me3.jpg",
        "/static/img/me4.jpg"
    ];

    let hobbyPhotos = [
        "/static/img/cosplay1.jpg",
        "/static/img/cosplay2.jpg",
        "/static/img/cosplay3.jpg",
        "/static/img/cosplay4.jpg"
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

                <hr className="divider"></hr>

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