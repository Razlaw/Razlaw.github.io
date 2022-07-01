import "./education.scss";

import React from "react";

import Logo from "../../components/logo/Logo";

import {education_steps} from "../../data/educationSteps";


export default function Education() {
    return (
        <div className="educationContainer">
            <Logo/>
            <div className="contentContainer">
                <h1 className="educationTitle">Bildungsweg</h1>
                {education_steps.map((education_step, key) => {
                    return (
                        <div className="educationStepContainer" key={"educationStep" + key}>
                            <h1 className="educationStepTitle">{education_step.title}</h1>
                            <h2 className="educationStepSubTitle">{education_step.subtitle}</h2>
                            <p className="educationStepDate">{education_step.date}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}