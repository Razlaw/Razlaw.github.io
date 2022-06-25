import "./education.scss";

import React from "react";

import Logo from "../../components/logo/Logo";

export default function Education() {
    return (
        <div className="educationContainer">
            <Logo/>
            <div className="contentContainer">
                <h1>Bildungsweg</h1>
                <h2>folgt...</h2>
            </div>
        </div>
    );
}