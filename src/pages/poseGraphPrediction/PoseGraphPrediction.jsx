import "./poseGraphPrediction.scss";

import React, {useEffect, useState} from "react";

import {useInView} from "react-intersection-observer";

import dancersImage from "../../assets/dancers_downscaled.jpg";
import linesForDancersImage from "../../assets/lines_for_dancers.png";

import ExternalLinkButton from "../../components/externalLinkButton/ExternalLinkButton";
import InternalLinkButton from "../../components/internalLinkButton/InternalLinkButton";

export default function PoseGraphPrediction() {
    const { ref, inView } = useInView({
        triggerOnce: false
    });
    const [wasInView, setWasInView] = useState(false);

    useEffect(() => {
        if(inView === true) {
            setWasInView(true);
        }
    }, [inView]);

    return (
        <div className="poseGraphPredictionContainer">
            <div className={"imageFrame " + (wasInView && "wasInView")} ref={ref}>
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
            <div className="textContainer">
                <h1>Pose Graph Prediction</h1>
                <p className="description">
                    Vorhersage von Bewegungen<br/>durch Graph Neuronale Netze.
                </p>
                <div className="links">
                    <ExternalLinkButton
                        text={"Code"}
                        link={"https://github.com/AIS-Bonn/pose_graph_prediction"}
                    />
                    <InternalLinkButton
                        text={"Details"}
                        link={"/projects_descriptions/openid=10"}
                    />
                </div>
            </div>
        </div>
    );
}