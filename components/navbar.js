import MiniLogo from "./miniLogo";
import "./navbar.css";

export default function Navbar() {
    return (
        <div className="col-12">
            <header className="navbar myNavbar">
                <section className="navbar-section">
                    <a className="btn btn-link home" href="/">Home</a>
                    <a className="btn btn-link about" href="/about">About</a>
                </section>
                <section className="navbar-center">
                    <MiniLogo className="miniLogo"></MiniLogo>
                </section>
                <section className="navbar-section">
                    <a className="btn btn-link resume">Résumé</a>
                </section>
            </header>
        </div>
    );
}