import "./poseGraphPrediction.scss";

import React from "react";

import {useInView} from "react-intersection-observer";

import dancersImage from "../../assets/dancers_downscaled.jpg";
import linesForDancersImage from "../../assets/lines_for_dancers.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function PoseGraphPrediction() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="poseGraphPredictionContainer">
            <div className="imageFrame" ref={ref}>
                <div className="imageContainer">
                    <img className="dancersImage" src={dancersImage} alt="Three dancers in one motion"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cue1"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cue2"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cue3"/>
                    <div className={"lowerLineCue " + (inView && "inView")} id="cue4"/>
                    <div className={"lowerLineCue " + (inView && "inView")} id="cue5"/>
                    <div className={"lowerLineCue " + (inView && "inView")} id="cue6"/>
                    <img
                        className={"linesForDancersImage " + (inView && "inView")}
                        src={linesForDancersImage}
                        alt="Lines indicating motion of dancers"
                    />
                </div>
            </div>
            <div className={"textContainer " + (inView && "inView")}>
                <h1 className="headlineBig" id="projectName">Pose Graph Prediction</h1>
                <p className="text" id="projectDescription">
                    Vorhersage von Bewegungen<br/>durch Graph Neuronale Netze.
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