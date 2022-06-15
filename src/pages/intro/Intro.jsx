import "./intro.scss";

import {useNavigate} from "react-router-dom";

import { ReactComponent as Logo1000SVG } from "../../assets/icons/logo_scaled_1000.svg";
import { ReactComponent as Logo4400SVG } from "../../assets/icons/logo_scaled_4400.svg";

import portraitImage from "../../assets/portrait_crop.png";

export default function Intro() {
    const navigate = useNavigate();

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

            <div className="linksToPrivacy">
                <p className="linkToPrivacyStatement" onClick={() => navigate("/privacy_statement")}>
                    Datenschutz
                </p>
                <p className="linkToSiteNotice" onClick={() => navigate("/site_notice")}>
                    Impressum
                </p>
            </div>
        </div>
    );
}