import "./poseGraphPrediction.scss";

import React from "react";

import dancersImage from "../../assets/dancers_downscaled.jpg";
import linesForDancersImage from "../../assets/lines_for_dancers.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function PoseGraphPrediction() {
    return (
        <div className="poseGraphPredictionContainer">
            <h1 className="projectsHeadline">Meine Projekte</h1>
            <div className="imageContainer">
                <img className="dancersImage" src={dancersImage} alt="Three dancers in one motion"/>
                <div className="upperLineCue" id="cueOne"/>
                <div className="upperLineCue" id="cueTwo"/>
                <div className="upperLineCue" id="cueThree"/>
                <div className="upperLineCue" id="cueFour"/>
                <div className="lowerLineCue"/>
                <img className="linesForDancersImage" src={linesForDancersImage} alt="Lines indicating motion of dancers"/>
            </div>
            <div className="textContainer">
                <h1 className="headlineBig" id="projectName">Pose Graph Prediction</h1>
                <p className="text" id="projectDescription">
                    Vorhersage von Bewegungen durch Graph Neuronale Netze.
                </p>
                <a
                    href="https://github.com/AIS-Bonn/pose_graph_prediction"
                    target="_blank"
                    rel="noreferrer">
                    Code
                    <ExternalLinkIcon/>
                </a>
            </div>
        </div>
    );
}