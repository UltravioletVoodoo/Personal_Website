import Project from "./project";

export default function Projects() {
    return (
        <div className="columns">
            
            <Project
                name="Character Generator"
                desc="A character generator for 5th edition Dungeons and Dragons."
                btnLink="https://ultravioletvoodoo.github.io/Character_Generator"
                imgSrc="/static/img/character_generator.PNG"
                >
            </Project>

            <Project
                name="Pixel Art Maker"
                desc="A pixel art maker that can be used entirely within the browser."
                btnLink="https://pixelart.jonbezeau.dev/"
                imgSrc="/static/img/Pixel_Art_Maker.PNG"
                >
            </Project>

            <Project
                name='Immersion Booster'
                desc='A tool for creating and managing Dungeons and Dragons sessions.'
                btnLink='https://immersion.jonbezeau.dev/'
                imgSrc='/static/img/Immersion_Booster.PNG'
                >
            </Project>

            <Project
                name='Sparks Crosses the Road'
                desc='A Flappy Bird clone about a courageous caterpillar named Sparks'
                btnLink='https://sparks.jonbezeau.dev/'
                imgSrc='/static/img/sparksCrossesTheRoad.PNG'
                >
            </Project>

            <Project
                name='Super Search'
                desc='A word searching app for poets, songwriters, and those with a word on the tip of their tongue'
                btnLink='https://super-search.jonbezeau.dev/'
                imgSrc='/static/img/superSearch.PNG'
                >
            </Project>

            <Project
                name='I.D.K'
                desc='An I.D.K triplicate generator used to generate acronyms in the IDK format'
                btnLink='https://idk.jonbezeau.dev/'
                imgSrc='/static/img/iDontKnow.PNG'
                >
            </Project>

        </div>
    );
}