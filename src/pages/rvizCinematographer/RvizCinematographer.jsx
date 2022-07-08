import "./rvizCinematographer.scss";

import React, {useEffect, useState} from "react";

import {useInView} from "react-intersection-observer";

import cameramanImage from "../../assets/cameraman_downscaled.jpg";
import lineForCameramanImage from "../../assets/line_for_cameraman.png";
import cameraOutlineImage from "../../assets/camera_outline_for_cameraman.png";

import ExternalLinkButton from "../../components/externalLinkButton/ExternalLinkButton";
import InternalLinkButton from "../../components/internalLinkButton/InternalLinkButton";

export default function RvizCinematographer() {
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
        <div className="cinematographerContainer">
            <div className={"imageFrame " + (wasInView && "wasInView")} ref={ref}>
                <div className="imageContainer">
                    <img
                        className="cameramanImage"
                        src={cameramanImage}
                        alt="Cameraman on a hill with mountains in the background"
                    />
                    <img
                        className={"cameraOutlineImage " + (inView && "inView")}
                        src={cameraOutlineImage}
                        alt="Outline around camera"
                    />
                    <img
                        className={"lineForCameramanImage " + (inView && "inView")}
                        src={lineForCameramanImage}
                        alt="Lines indicating motion of camera"
                    />
                </div>
            </div>
            <div className="textContainer">
                <h1>RViz Cinematographer</h1>
                <p className="description">
                    Komplexe Kamerafahrten<br/> benutzerfreundlich in RViz erstellen.
                </p>
                <div className="links">
                    <ExternalLinkButton
                        text={"Code"}
                        link={"https://github.com/AIS-Bonn/rviz_cinematographer"}
                    />
                    <InternalLinkButton
                        text={"Details"}
                        link={"/projects_descriptions/openid=11"}
                    />
                </div>
            </div>
        </div>
    );
}