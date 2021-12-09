import "./topbar.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Link to home</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>124 56</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>mail adr</span>
                    </div>
                </div>
                <div className="right">

                </div>
            </div>
        </div>
    );
}