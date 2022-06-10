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
                    <div className={"upperLineCue " + (inView && "inView")} id="cueOne"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cueTwo"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cueThree"/>
                    <div className={"upperLineCue " + (inView && "inView")} id="cueFour"/>
                    <div className="lowerLineCue"/>
                    <img
                        className={"linesForDancersImage " + (inView && "inView")}
                        ref={ref}
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