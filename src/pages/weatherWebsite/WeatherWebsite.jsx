import "./weatherWebsite.scss";

import React, {useEffect, useState} from "react";

import {useInView} from "react-intersection-observer";

import phoneTemplateImage from "../../assets/template_phone_for_website_downscaled.png";
import websiteImageOne from "../../assets/website_part1_downscaled.png";
import websiteImageTwo from "../../assets/website_part2_downscaled.png";

import ExternalLinkButton from "../../components/externalLinkButton/ExternalLinkButton";

export default function WeatherWebsite() {
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
        <div className="weatherWebsiteContainer">
            <div className="imageFrame" ref={ref}>
                <div className="imageContainer">
                    <img
                        className={"websiteImageOne " + (inView && "inView")}
                        src={websiteImageOne}
                        alt="First part of weather website fitting into smartphone template"
                    />
                    <img
                        className={"websiteImageTwo " + (inView && "inView")}
                        src={websiteImageTwo}
                        alt="Second part of weather website fitting into smartphone template sliding in with animation"
                    />
                    <img
                        className="phoneTemplateImage"
                        src={phoneTemplateImage}
                        alt="Smartphone with part of weather website in hand"
                    />
                    <span className={"swipeCue " + (inView && "inView")}/>
                </div>
            </div>
            <div className={"textContainer " + (wasInView && "wasInView")}>
                <h1>Weather Website</h1>
                <p className="description">
                    Die Wettervorhersage.<br/>Auf meine Art.
                </p>
                <div className="externalLinks">
                    <ExternalLinkButton
                        text={"Code"}
                        link={"https://razlaw.github.io/weather_website"}
                    />
                    <ExternalLinkButton
                        text={"Website"}
                        link={"https://razlaw.github.io/weather_website"}
                    />
                </div>
            </div>
        </div>
    );
}