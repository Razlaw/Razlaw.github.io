import "./multiObjectTracking.scss";

import React from "react";

import trackingImage from "../../assets/tracks_downscaled.jpg";
import linesForTrackingImage from "../../assets/lines_for_tracking.png";
import additionalLineForTrackingImage from "../../assets/additional_line_for_tracking.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function MultiObjectTracking() {
    return (
        <div className="multiObjectTrackingContainer">
            <div className="imageContainer">
                <img className="trackingImage" src={trackingImage} alt="Foot prints in sand"/>
                <img className="linesForTrackingImage" src={linesForTrackingImage} alt="Lines indicating paths of objects"/>
                <img className="additionalLineForTrackingImage" src={additionalLineForTrackingImage} alt="Additional line indicating path of bird"/>
            </div>
            <div className="textContainer">
                <h1 className="headlineBig" id="projectName">Multi Object Tracking</h1>
                <p className="text" id="projectDescription">
                    Effiziente Bewegungsverfolgung<br/> von unterschiedlichen Objekten.
                </p>
                <a
                    href="https://github.com/AIS-Bonn/multi_hypothesis_tracking"
                    target="_blank"
                    rel="noreferrer">
                    Code
                    <ExternalLinkIcon/>
                </a>
            </div>
        </div>
    );
}