import MiniLogo from "./miniLogo";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar myNavbar">
            <section className="navbar-section">
                <a className="btn btn-link">About</a>
            </section>
            <section className="navbar-center">
                <MiniLogo></MiniLogo>
            </section>
            <section className="navbar-section">
                <a className="btn btn-link">Resume</a>
            </section>
        </header>
    );
}