import "./intro.scss";

import { ReactComponent as Logo1000SVG } from "../../assets/icons/logo_scaled_1000.svg";
import { ReactComponent as Logo4400SVG } from "../../assets/icons/logo_scaled_4400.svg";

import portraitImage from "../../assets/portrait_crop.png";

export default function Intro() {
    const viewportDiagonal = Math.sqrt(window.innerHeight * window.innerHeight + window.innerWidth * window.innerWidth);

    console.log("viewportDiagonal ", viewportDiagonal);
    return (
        <div className="intro">
            <div className="contentContainer">
                <div className="logoContainer">
                    {(
                        viewportDiagonal < 1000 ?
                        <Logo1000SVG className="logoSVG"/> :
                        <Logo4400SVG className="logoSVG"/>
                    )}
                </div>
                <div className="leftContainer">
                    <div className="imgContainer">
                        <img src={portraitImage} alt="Portrait of Jan Razlaw"/>
                    </div>
                </div>
                <div className="rightContainer">
                    <div className="textContainer">
                        <h2 className="headlineMedium" id="myName">Jan Razlaw</h2>
                        <h1 className="headlineBig" id="jobDescription">Computer Scientist</h1>
                        <p className="text" id="myDescription">
                            Von Prototypen in der Robot Vision hin zu Anwendungen mit direktem Nutzen
                            und Feedback.<br/>Voneinander lernen mit Open Source & Clean Code.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}