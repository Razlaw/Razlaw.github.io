import "./externalLinkButton.scss";

import {ReactComponent as ExternalLinkIcon} from "../../assets/icons/external_link.svg";

export default function ExternalLinkButton({text, link}) {
    return (
        <a
            className="externalLinkButton"
            href={link}
            target="_blank"
            rel="noreferrer">
            {text}
            <ExternalLinkIcon/>
        </a>
    );
}