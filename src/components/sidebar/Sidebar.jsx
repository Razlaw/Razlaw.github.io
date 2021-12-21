import "./sidebar.scss";

export default function Sidebar({menuOpen, setMenuOpen}) {
    return (
        <div className={"sidebar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}