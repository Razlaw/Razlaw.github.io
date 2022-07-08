import "./internalLinkButton.scss";

import {Link} from "react-router-dom";

export default function InternalLinkButton({text, link}) {
    return (
        <Link
            className="internalLinkButton"
            to={link}>
            {text}
        </Link>
    );
}