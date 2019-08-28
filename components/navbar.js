import MiniLogo from "./miniLogo";

export default function Navbar() {
    return (
        <header className="navbar">
            <section className="navbar-section">
                <MiniLogo></MiniLogo>
            </section>
            <section className="navbar-center"></section>
            <section className="navbar-section">
                <a className="btn btn-link">About</a>
                <a className="btn btn-link">Resume</a>
            </section>
        </header>
    );
}