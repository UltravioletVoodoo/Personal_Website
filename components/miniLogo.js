import "./miniLogo.css";

export default function MiniLogo() {
    
    // State for whether the animation class is active or not
    const [clicked, setClicked] = React.useState(false);


    return (
        <div>
            <img
                src="/static/img/logo.svg"
                className={clicked ? "miniLogo spinAnimation" : "miniLogo"} 
                onClick={() => setClicked(!clicked)}
                id="miniLogo">
            </img>
        </div>
    );
}   
