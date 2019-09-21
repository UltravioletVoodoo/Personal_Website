import "./miniLogo.css";

export default function MiniLogo() {
    
    // State for whether the animation class is active or not
    const [clicked, setClicked] = React.useState(false);

    function resetAnimation() {
        setClicked(false);
        setTimeout(() => setClicked(true));
    }

    return (
        <img
            src="/static/img/logo.svg"
            className={"miniLogo " + (clicked ? "spinAnimation" : "")} 
            onClick={resetAnimation}
            id="miniLogo">
        </img>
    );
}