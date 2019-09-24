import "./footer.css";

export default function Footer() {
    return (
        <div className="col-12">
            <div className="footer">
                <div className="columns">
                    <div className="col-sm-6 col-4 col-mx-auto">
                        <div className="columns">
                            <div className="col-4 logoContainer">
                                <a
                                    href="https://github.com/UltravioletVoodoo/Personal_Website"
                                    target="_blank"
                                    >
                                        <img className="logo" src="/static/img/github-logo.svg"></img>
                                </a>
                            </div>
                            <div className="col-4 logoContainer">
                                <a
                                    href="https://www.linkedin.com/in/jonathan-bezeau-b04537194/"
                                    target="_blank"
                                    >
                                        <img className="logo" src="/static/img/linkedin-logo.svg"></img>
                                </a>
                            </div>
                            <div className="col-4 logoContainer">
                                <a
                                    href="https://www.facebook.com/jonathan.bezeau.7"
                                    target="_blank"
                                    >
                                        <img className="logo" src="/static/img/facebook-logo.svg"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
