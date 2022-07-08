import './fonts/Emberly-ExtraBold.woff';
import "./app.scss"

import {Route, Routes} from "react-router-dom";

import Home from "./pages/home/Home";
import PrivacyStatement from "./pages/privacyStatement/PrivacyStatement";
import SiteNotice from "./pages/siteNotice/SiteNotice";
import Sources from "./pages/sources/Sources";
import Education from "./pages/education/Education";
import ProjectsDescriptions from "./pages/projectsDescriptions/ProjectsDescriptions";
import Timeline from "./pages/timeline/Timeline";
import ErrorPage from "./pages/errorPage/ErrorPage";
import React from "react";

export default function App() {

    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/privacy_statement" element={<PrivacyStatement/>}/>
                <Route path="/site_notice" element={<SiteNotice/>}/>
                <Route path="/sources" element={<Sources/>}/>

                <Route path="/education" element={<Education/>}/>
                <Route path="/projects_descriptions/openid=:openID" element={<ProjectsDescriptions/>}/>
                <Route path="/timeline" element={<Timeline/>}/>

                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>

        </div>
    );
}