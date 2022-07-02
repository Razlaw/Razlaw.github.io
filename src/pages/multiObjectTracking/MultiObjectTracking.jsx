import "./multiObjectTracking.scss";

import React, {useEffect, useState} from "react";

import {useInView} from "react-intersection-observer";

import trackingImage from "../../assets/tracking_downscaled.jpg";
import trackingLineLayer1Image from "../../assets/tracking_line_layer_1.png";
import trackingLineLayer2Image from "../../assets/tracking_line_layer_2.png";
import trackingLineLayer3Image from "../../assets/tracking_line_layer_3.png";
import trackingLineLayer4Image from "../../assets/tracking_line_layer_4.png";
import trackingLineLayer5Image from "../../assets/tracking_line_layer_5.png";
import trackingLineLayer6Image from "../../assets/tracking_line_layer_6.png";

import ExternalLinkButton from "../../components/externalLinkButton/ExternalLinkButton";
import InternalLinkButton from "../../components/internalLinkButton/InternalLinkButton";

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
                        alt="Two persons at a beach with their foot prints in sand"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer1"
                        src={trackingLineLayer1Image}
                        alt="First part of line representing path of left person"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer2"
                        src={trackingLineLayer2Image}
                        alt="Second part of line representing path of left person"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer3"
                        src={trackingLineLayer3Image}
                        alt="Third part of line representing path of left person"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer4"
                        src={trackingLineLayer4Image}
                        alt="Fourth part of line representing path of left person"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer5"
                        src={trackingLineLayer5Image}
                        alt="First part of line representing path of right person"/>
                    <img
                        className={"trackingLineLayer " + (inView && "inView")}
                        id="trackingLineLayer6"
                        src={trackingLineLayer6Image}
                        alt="Second part of line representing path of right person"/>
                </div>
            </div>
            <div className={"textContainer " + (wasInView && "wasInView")}>
                <h1>Multi Hypothesis Tracking</h1>
                <p className="description">
                    Effiziente Bewegungsverfolgung<br/> von unterschiedlichen Objekten.
                </p>
                <div className="links">
                    <ExternalLinkButton
                        text={"Code"}
                        link={"https://github.com/AIS-Bonn/multi_hypothesis_tracking"}
                    />
                    <InternalLinkButton
                        text={"Details"}
                        link={"/projects_descriptions/openid=9"}
                    />
                </div>
            </div>
        </div>
    );
}