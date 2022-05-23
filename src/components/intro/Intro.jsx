import "./intro.scss";
import portraitImage from "../../assets/portrait_crop.png";

export default function Intro() {
    return (
        <div className="intro">
            <div className="contentContainer">
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