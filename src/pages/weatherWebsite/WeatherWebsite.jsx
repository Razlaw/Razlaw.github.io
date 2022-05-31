import "./weatherWebsite.scss";

import React from "react";

import phoneTemplateImage from "../../assets/template_phone_for_website_downscaled.png";
import websiteImageOne from "../../assets/website_part1_downscaled.png";
import websiteImageTwo from "../../assets/website_part2_downscaled.png";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function WeatherWebsite() {
    return (
        <div className="weatherWebsiteContainer">
            <h1 className="projectsHeadline">Meine Projekte</h1>
            <div className="imageContainer">
                <img className="image websiteImageOne" src={websiteImageOne} alt="Smartphone on table"/>
                <img className="image websiteImageTwo" src={websiteImageTwo} alt="Smartphone on table"/>
                <img className="image phoneTemplateImage" src={phoneTemplateImage} alt="Smartphone on table"/>
                <span className="swipeCue"></span>
            </div>
            <div className="textContainer">
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