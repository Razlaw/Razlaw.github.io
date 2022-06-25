import "./timeline.scss";

import React from "react";

import Logo from "../../components/logo/Logo";

export default function Timeline() {
    return (
        <div className="timelineContainer">
            <Logo/>
            <div className="contentContainer">
                <h1>Zeitstrahl</h1>
                <h2>folgt...</h2>
            </div>
        </div>
    );
}