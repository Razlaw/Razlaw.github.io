import "./logo.scss";

import {useNavigate} from "react-router-dom";

export default function Logo() {
    const navigate = useNavigate();

    return (
        <div className="logo" onClick={() => navigate("/")}>
            <h1 className="logoPart firstR">R</h1>
            <h1 className="logoPart secondR">R</h1>
        </div>
    );
}