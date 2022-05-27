import "./weatherWebsite.scss";

import React from "react";

import phoneImage from "../../assets/phone_downscaled.jpg";
import {ReactComponent as ExternalLinkIcon} from '../../assets/icons/external_link.svg';

export default function WeatherWebsite() {
    return (
        <div className="weatherWebsiteContainer">
            <h1 className="projectsHeadline">Meine Projekte</h1>
            <div className="imageContainer">
                <img className="phoneImage" src={phoneImage} alt="Smartphone on table"/>
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