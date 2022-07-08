import "./linksToPrivacy.scss";

import React from "react";

import {Link} from "react-router-dom";

export default function LinksToPrivacy() {
    return (
        <div className="linksToPrivacy">
            <Link
                className="privacyLink"
                id="linkToPrivacyStatement"
                to="/privacy_statement"
            >
                Datenschutz
            </Link>
            <Link
                className="privacyLink"
                to="/site_notice"
            >
                Impressum
            </Link>
            <Link
                className="privacyLink"
                id="linkToSources"
                to="/sources"
            >
                Quellen
            </Link>
        </div>
    );
}