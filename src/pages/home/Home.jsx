import "./home.scss";

import React from "react";

import Intro from "../../components/intro/Intro";
import ProjectsContainer from "../../components/projectsContainer/ProjectsContainer";

export default function Home() {
    return (
        <div className="sections">
            <Intro/>
            <ProjectsContainer/>
        </div>
    );
}