import './fonts/Emberly-Thin.woff';
import "./app.scss"

import {Route, Routes, useNavigate} from "react-router-dom";

import Home from "./pages/home/Home";
import PrivacyStatement from "./pages/privacyStatement/PrivacyStatement";
import SiteNotice from "./pages/siteNotice/SiteNotice";
import Education from "./pages/education/Education";
import ProjectsDescriptions from "./pages/projectsDescriptions/ProjectsDescriptions";
import Timeline from "./pages/timeline/Timeline";
import ErrorPage from "./pages/errorPage/ErrorPage";
import React from "react";

export default function App() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="linksToPrivacy">
                <p className="linkToPrivacyStatement" onClick={() => navigate("/privacy_statement")}>
                    Datenschutz
                </p>
                <p className="linkToSiteNotice" onClick={() => navigate("/site_notice")}>
                    Impressum
                </p>
            </div>

            <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/privacy_statement" element={<PrivacyStatement/>}/>
                <Route path="/site_notice" element={<SiteNotice/>}/>

                <Route path="/education" element={<Education/>}/>
                <Route path="/projects_descriptions" element={<ProjectsDescriptions/>}/>
                <Route path="/timeline" element={<Timeline/>}/>

                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>

        </div>
    );
}