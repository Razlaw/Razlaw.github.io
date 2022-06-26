import "./education.scss";

import React from "react";

import Logo from "../../components/logo/Logo";

export default function Education() {
    return (
        <div className="educationContainer">
            <Logo/>
            <div className="contentContainer">
                <h1 className="educationTitle">Bildungsweg</h1>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Autodidaktische Weiterbildung</h1>
                    <h2 className="educationStepSubTitle">Front-End-Webentwicklung</h2>
                    <p className="educationStepDate">Nov. 2021 - Jul. 2022</p>
                </div>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Promotions&shy;stipendium</h1>
                    <h2 className="educationStepSubTitle">Verfolgung und Vorhersage mittels Graph Neuronaler Netze</h2>
                    <p className="educationStepDate">Nov. 2018 - Okt. 2021</p>
                </div>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Master of Science - Computer Science - 1,3</h1>
                    <h2 className="educationStepSubTitle">Abschlussarbeit: "Detection and Tracking of Small Objects in
                        Sparse 3D Laser Range Data" - 1,1</h2>
                    <p className="educationStepDate">Apr. 2015 - Okt. 2018</p>
                </div>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Bachelor of Science - Informatik - 1,7</h1>
                    <h2 className="educationStepSubTitle">Abschlussarbeit: "Evaluation von 3D-Registrierverfahren auf
                        spärlichen 3D-Laserscans" - 1,0</h2>
                    <p className="educationStepDate">Okt. 2011 - Jan. 2015</p>
                </div>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Zivildienst</h1>
                    <p className="educationStepDate">Nov. 2010 - Apr. 2011</p>
                </div>
                <div className="educationStepContainer">
                    <h1 className="educationStepTitle">Allgemeine Hochschulreife - 1,8</h1>
                    <h2 className="educationStepSubTitle">Leistungskurse: Mathematik & Physik</h2>
                    <p className="educationStepDate">Aug. 2008 - Jun. 2010</p>
                </div>
            </div>
        </div>
    );
}