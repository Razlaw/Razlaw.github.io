import "./projectsDescriptions.scss";

import React from "react";

import {useParams} from "react-router-dom";

import Logo from "../../components/logo/Logo";
import Accordion from "../../components/accordion/Accordion";

import {projectDescriptions} from "../../data/projectDescriptions";

export default function ProjectsDescriptions() {
    const {openID} = useParams();

    return (
        <div className="projectsDescriptionsContainer">
            <Logo/>
            <div className="contentContainer">
                <h1>Projekte</h1>
                <Accordion data={projectDescriptions} openID={parseInt(openID)}/>
            </div>
        </div>
    );
}