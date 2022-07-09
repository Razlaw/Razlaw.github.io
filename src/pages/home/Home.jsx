import "./home.scss";

import React from "react";

import {ScrollRestoration} from "../../utils/utils";

import Intro from "../../pages/intro/Intro";
import ProjectsContainer from "../../components/projectsContainer/ProjectsContainer";
import International from "../../pages/international/International";
import Skills from "../skills/Skills";
import Interests from "../interests/Interests";
import Footer from "../footer/Footer";

export default function Home() {
    const onScrollFunction = ScrollRestoration("sectionsID");

    return (
        <div className="sections" id="sectionsID" onScroll={onScrollFunction}>
            <Intro/>
            <ProjectsContainer/>
            <International/>
            <Skills/>
            <Interests/>
            <Footer/>
        </div>
    );
}