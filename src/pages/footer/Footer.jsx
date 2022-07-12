import "./footer.scss";

import {useEffect} from "react";

import {useInView} from "react-intersection-observer";

import {Link} from "react-router-dom";

import {ReactComponent as ExternalLinkIcon} from "../../assets/icons/external_link.svg";

import {getAnimationState} from "../../utils/utils";

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    useEffect(() => {
        if(inView === true) {
            window.sessionStorage.setItem("footerAnimationPlayed", "true");
        }
    }, [inView]);

    const animationState = getAnimationState(inView, window.sessionStorage.getItem("footerAnimationPlayed"));

    return (
        <div className="footer">
            <div className="footerContainer">
                <h1 className="footerTitle">
                    Weiterführendes
                </h1>
                <div className={"internalLinksContainer " + animationState} ref={ref}>
                    <div className="internalLinkContainer" id="education">
                        <Link
                            className={"internalLink " + animationState}
                            to="/education"
                        >
                            <div className="linkText">
                                <h1>Bildungsweg</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="internalLinkContainer" id="projects">
                        <Link
                            className={"internalLink " + animationState}
                            to="/projects_descriptions/openid=-1"
                        >
                            <div className="linkText">
                                <h1>Projekte</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="internalLinkContainer" id="timeline">
                        <Link
                            className={"internalLink " + animationState}
                            to="/timeline"
                        >
                            <div className="linkText">
                                <h1>Zeitstrahl</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className={"externalLinksContainer " + animationState} ref={ref}>
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
                            href="https://codepen.io/razlaw"
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
                            id="scholarLink"
                            href="https://scholar.google.com/citations?user=bcx5-kkAAAAJ"
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
                            id="linkedInLink"
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