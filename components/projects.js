import Project from "./project";

export default function Projects() {
    return (
        <div className="columns">
            
            <Project
                name="Character Generator"
                desc="A character generator for 5th edition dungeons and dragons."
                btnLink="https://ultravioletvoodoo.github.io/Character_Generator"
                imgSrc="static/img/character_generator.png"
                >
            </Project>

            <Project
                name="Pixel Art Maker"
                desc="A pixel art maker that can be used entirely within the browser."
                >
            </Project>

            <Project
                name="Chiptune Music Maker"
                desc="A chiptune (8-bit) music maker that can be used entirely within the browser."
                >
            </Project>

        </div>
    );
}

// Example Project
{/* <Project 
    name="testName"
    desc="test description. Lalala alala alala alalala"
    btnLink="https://www.google.ca"
    imgSrc="static/img/placeholder.png"
    >
</Project> */}