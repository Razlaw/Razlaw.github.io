import "./projectsIntro.scss";

import React from "react";

import { useInView } from 'react-intersection-observer';

import wavesImage from "../../assets/waves_downscaled.jpg";

export default function ProjectsIntro() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="projectsIntroContainer">
            <div className="projectsIntroImageContainer">
                <img className="wavesImage" src={wavesImage} alt="Waves in black and white"/>
            </div>
            <div className={"projectsIntroTextContainer " + (inView && "inView")} ref={ref}>
                <h1 className="headlineBig" id="projectName">Ausgewählte Highlights</h1>
            </div>
        </div>
    );
}