import "./multiObjectTracking.scss";

import React, {useEffect, useState} from "react";

import {useInView} from "react-intersection-observer";

import trackingImage from "../../assets/tracks_downscaled.jpg";
import linesForTrackingImage from "../../assets/lines_for_tracking.png";
import additionalLineForTrackingImage from "../../assets/additional_line_for_tracking.png";

import ExternalLinkButton from "../../components/externalLinkButton/ExternalLinkButton";

export default function MultiObjectTracking() {
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
        <div className="multiObjectTrackingContainer">
            <div className="imageFrame" ref={ref}>
                <div className="imageContainer">
                    <img
                        className="trackingImage"
                        src={trackingImage}
                        alt="Foot prints in sand"/>
                    <img
                        className={"linesForTrackingImage " + (inView && "inView")}
                        src={linesForTrackingImage}
                        alt="Lines indicating paths of objects"/>
                    <img
                        className={"additionalLineForTrackingImage " + (inView && "inView")}
                        src={additionalLineForTrackingImage}
                        alt="Additional line indicating path of bird"/>
                </div>
            </div>
            <div className={"textContainer " + (wasInView && "wasInView")}>
                <h1>Multi Hypothesis Tracking</h1>
                <p className="description">
                    Effiziente Bewegungsverfolgung<br/> von unterschiedlichen Objekten.
                </p>
                <ExternalLinkButton
                    text={"Code"}
                    link={"https://github.com/AIS-Bonn/multi_hypothesis_tracking"}
                />
            </div>
        </div>
    );
}