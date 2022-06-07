import "./rvizCinematographer.scss";

import React from "react";

import { useInView } from 'react-intersection-observer';

import cameramanImage from "../../assets/cameraman_downscaled.jpg";
import lineForCameramanImage from "../../assets/line_for_cameraman.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function RvizCinematographer() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="cinematographerContainer">
            <div className={"imageContainer " + (inView && "inView")} ref={ref}>
                <img className="cameramanImage" src={cameramanImage} alt="Cameraman on a hill with mountains in the background"/>
                <img className="lineForCameramanImage" src={lineForCameramanImage} alt="Lines indicating motion of camera"/>
            </div>
            <div className={"textContainer " + (inView && "inView")} ref={ref}>
                <h1 className="headlineBig" id="projectName">RViz Cinematographer</h1>
                <p className="text" id="projectDescription">
                    Komplexe Kamerafahrten<br/> benutzerfreundlich in RViz erstellen
                </p>
                <a
                    href="https://github.com/AIS-Bonn/rviz_cinematographer"
                    target="_blank"
                    rel="noreferrer">
                    Code
                    <ExternalLinkIcon/>
                </a>
            </div>
        </div>
    );
}