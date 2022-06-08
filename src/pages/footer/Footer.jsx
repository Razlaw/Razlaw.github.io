import "./footer.scss";

import {useInView} from "react-intersection-observer";

import {ReactComponent as ExternalLinkIcon} from "../../assets/icons/external_link.svg";

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="footer">
            <div className="footerContainer">
                <h1 className="footerTitle">
                    Weiterführendes
                </h1>
                <div className={"internalLinksContainer " + (inView && "inView")} ref={ref}>
                    <div className="internalLinkContainer" id="education">
                        <a
                            className={"internalLink " + (inView && "inView")}
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Bildungsweg</h1>
                            </div>
                        </a>
                    </div>
                    <div className="internalLinkContainer" id="projects">
                        <a
                            className={"internalLink " + (inView && "inView")}
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Projekte</h1>
                            </div>
                        </a>
                    </div>
                    <div className="internalLinkContainer" id="publications">
                        <a
                            className={"internalLink " + (inView && "inView")}
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Publikationen</h1>
                            </div>
                        </a>
                    </div>
                    <div className="internalLinkContainer" id="timeline">
                        <a
                            className={"internalLink " + (inView && "inView")}
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Zeitstrahl</h1>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={"externalLinksContainer " + (inView && "inView")} ref={ref}>
                    <div className="externalLinkContainer" id="github">
                        <a
                            className="externalLink"
                            id="githubLink"
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Github</h1>
                                <ExternalLinkIcon/>
                            </div>
                        </a>
                    </div>
                    <div className="externalLinkContainer" id="codepen">
                        <a
                            className="externalLink"
                            id="codepenLink"
                            href="https://github.com/Razlaw"
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Codepen</h1>
                                <ExternalLinkIcon/>
                            </div>
                        </a>
                    </div>
                    <div className="externalLinkContainer" id="instagram">
                        <a
                            className="externalLink"
                            id="instagramLink"
                            href="https://instagram.com/bonnusmaterial?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Instagram</h1>
                                <ExternalLinkIcon/>
                            </div>
                        </a>
                    </div>
                    <div className="externalLinkContainer" id="scholar">
                        <a
                            className="externalLink"
                            id="instagramLink"
                            href="https://instagram.com/bonnusmaterial?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>Scholar</h1>
                                <ExternalLinkIcon/>
                            </div>
                        </a>
                    </div>
                    <div className="externalLinkContainer" id="linkedin">
                        <a
                            className="externalLink"
                            id="instagramLink"
                            href="https://instagram.com/bonnusmaterial?igshid=YmMyMTA2M2Y="
                            target="_blank"
                            rel="noreferrer">
                            <div className="linkText">
                                <h1>LinkedIn</h1>
                                <ExternalLinkIcon/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}