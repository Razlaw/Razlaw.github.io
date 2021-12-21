import "./sidebar.scss";

export default function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#intro">Home</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}