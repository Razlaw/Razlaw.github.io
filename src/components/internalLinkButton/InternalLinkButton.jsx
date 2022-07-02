import "./internalLinkButton.scss";

import {useNavigate} from "react-router-dom";

export default function InternalLinkButton({text, link}) {
    const navigate = useNavigate();

    return (
        <div
            className="internalLinkButton"
            onClick={() => {navigate(link)}}>
            {text}
        </div>
    );
}