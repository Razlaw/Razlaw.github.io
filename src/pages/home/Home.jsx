import "./home.scss";

import React from "react";

import Intro from "../../pages/intro/Intro";
import ProjectsContainer from "../../components/projectsContainer/ProjectsContainer";
import International from "../../pages/international/International";
import Skills from "../skills/Skills";
import Interests from "../interests/Interests";
import Footer from "../footer/Footer";

export default function Home() {
    return (
        <div className="sections">
            <Intro/>
            <ProjectsContainer/>
            <International/>
            <Skills/>
            <Interests/>
            <Footer/>
        </div>
    );
}