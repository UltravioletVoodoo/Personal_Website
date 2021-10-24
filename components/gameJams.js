import Project from "./project";
import "./gameJams.css";

export default function GameJams() {
    return (
        <>
            <div className="gameJamsTitle">
                <h1>Game Jams</h1>
                <hr></hr>
            </div>


            <div className="columns">
                
                <Project
                    name="Alette and the Gloom"
                    desc="A cute, spooky, storybook game. Created in 48 hours on a 4 person team in October of 2020."
                    btnLink="https://emanaretne.itch.io/alette-and-the-gloom"
                    imgSrc="/static/img/AletteAndTheGloom.PNG"
                    >
                </Project>

                <Project
                    name="Click the Cob"
                    desc="A clicker farming game. Created in 48 hours on a 5 person team in May of 2021."
                    btnLink="https://emanaretne.itch.io/click-on-the-cob"
                    imgSrc="/static/img/ClickontheCob.PNG"
                    >
                </Project>

                <Project
                    name="Requiem of the Rift"
                    desc="A spooky space rhythm game. Created in 48 hours on a 5 person team in October of 2021."
                    btnLink="https://emanaretne.itch.io/requiem-of-the-rift"
                    imgSrc="/static/img/RequiemOfTheRift.png"
                    >
                </Project>

            </div>
        </>
    );
}