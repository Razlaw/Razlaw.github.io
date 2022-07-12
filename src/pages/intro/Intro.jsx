import "./intro.scss";

import {useEffect} from "react";

import LinksToPrivacy from "../../components/linksToPrivacy/LinksToPrivacy";

import { ReactComponent as Logo1000SVG } from "../../assets/icons/logo_scaled_1000.svg";
import { ReactComponent as Logo4400SVG } from "../../assets/icons/logo_scaled_4400.svg";

import portraitImage from "../../assets/portrait_crop.png";

export default function Intro() {
    const viewportDiagonal = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth);

    // Prepare variable in session storage for next render
    useEffect(() => {
        if(window.sessionStorage.getItem("playedIntroAnimation") === null) {
            window.sessionStorage.setItem("playedIntroAnimation", "true");
        }
    }, []);

    return (
        <div className="intro">
            <div className="contentContainer">
                <div className="logoContainer">
                    {(
                        viewportDiagonal < 1000 ?
                        <Logo1000SVG className={"logoSVG " + (window.sessionStorage.getItem("playedIntroAnimation") === "true" ? "playedAnimation" : "playAnimation")}/> :
                        <Logo4400SVG className={"logoSVG " + (window.sessionStorage.getItem("playedIntroAnimation") === "true" ? "playedAnimation" : "playAnimation")}/>
                    )}
                </div>
                <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={portraitImage} alt="Portrait of Jan Razlaw"/>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="textContainer">
                        <h2 id="myName">Jan Razlaw</h2>
                        <h1 id="jobDescription">Computer Scientist</h1>
                        <p className="text" id="myDescription">
                            Von Prototypen in der Robot Vision<br/>
                            hin zu Anwendungen mit direktem Nutzen und Feedback.<br/>
                            Voneinander lernen mit Open Source & Clean Code.
                        </p>
                    </div>
                </div>
            </div>

            <LinksToPrivacy/>
        </div>
    );
}