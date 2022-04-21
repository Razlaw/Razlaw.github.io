import "./errorPage.scss";

import React from "react";
import {useLocation} from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();

    return (
        <div className="errorPage">
            <h1>Fehler.</h1>
            <h1>Dieser Pfad existiert nicht.</h1>
            <p>
                Der angeforderte Pfad ist {location.pathname}.
            </p>
        </div>
    );
}