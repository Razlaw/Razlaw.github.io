import "./project1.scss";

import React from "react";

import cameramanImage from "../../assets/cameraman_downscaled.jpg";
import lineForCameramanImage from "../../assets/line_for_cameraman.png";

export default function Project1() {
    return (
        <div className="cinematographerContainer">
            <h1 className="projectsHeadline">Meine Projekte</h1>
            <div className="imageContainer">
                <img className="cameramanImage" src={cameramanImage} alt="Cameraman on a hill with mountains in the background"/>
                <img className="lineForCameramanImage" src={lineForCameramanImage} alt="Lines indicating motion of camera"/>
            </div>
            <div className="textContainer">
                <h1 className="headlineBig" id="projectName">RViz Cinematographer</h1>
                <p className="text" id="projectDescription">
                    Komplexe Kamerafahrten benutzerfreundlich in RViz erstellen
                </p>
                <a
                    href="https://github.com/AIS-Bonn/rviz_cinematographer"
                    target="_blank"
                    rel="noreferrer">
                    Code + icon external link
                </a>
            </div>
        </div>
    );
}