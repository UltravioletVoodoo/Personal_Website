import MiniLogo from "./miniLogo";
import "./navbar.css";

export default function Navbar() {
    return (
        <header className="navbar myNavbar">
            <section className="navbar-section">
                <a className="btn btn-link about" href="/about">About</a>
            </section>
            <section className="navbar-center">
                <MiniLogo className="miniLogo"></MiniLogo>
            </section>
            <section className="navbar-section">
                <a className="btn btn-link resume">Résume</a>
            </section>
        </header>
    );
}