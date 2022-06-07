import "./weatherWebsite.scss";

import React from "react";

import {useInView} from "react-intersection-observer";

import phoneTemplateImage from "../../assets/template_phone_for_website_downscaled.png";
import websiteImageOne from "../../assets/website_part1_downscaled.png";
import websiteImageTwo from "../../assets/website_part2_downscaled.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function WeatherWebsite() {
    const { ref, inView } = useInView({
        triggerOnce: true
    });

    return (
        <div className="weatherWebsiteContainer">
            <div className="imageContainer" ref={ref}>
                <img className={"websiteImageOne " + (inView && "inView")} src={websiteImageOne} alt="First part of weather website fitting into smartphone template"/>
                <img className={"websiteImageTwo " + (inView && "inView")} src={websiteImageTwo} alt="Second part of weather website fitting into smartphone template sliding in with animation"/>
                <img className="phoneTemplateImage" src={phoneTemplateImage} alt="Smartphone with part of weather website in hand"/>
                <span className={"swipeCue " + (inView && "inView")}/>
            </div>
            <div className={"textContainer " + (inView && "inView")}>
                <h1 className="headlineBig" id="projectName">Weather Website</h1>
                <p className="text" id="projectDescription">
                    Testballon Nr.1 in die Cloud.
                </p>
                <a
                    href="https://razlaw.github.io/weather_website"
                    target="_blank"
                    rel="noreferrer">
                    Code
                    <ExternalLinkIcon/>
                </a>
            </div>
        </div>
    );
}