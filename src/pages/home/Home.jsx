import "./home.scss";

import React from "react";

import Intro from "../../pages/intro/Intro";
import ProjectsContainer from "../../components/projectsContainer/ProjectsContainer";
import International from "../../pages/international/International";

export default function Home() {
    return (
        <div className="sections">
            <Intro/>
            <ProjectsContainer/>
            <International/>
        </div>
    );
}