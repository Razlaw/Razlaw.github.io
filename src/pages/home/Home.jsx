import "./home.scss";

import React from "react";

import Intro from "../../pages/intro/Intro";
import ProjectsContainer from "../../components/projectsContainer/ProjectsContainer";

export default function Home() {
    return (
        <div className="sections">
            <Intro/>
            <ProjectsContainer/>
        </div>
    );
}