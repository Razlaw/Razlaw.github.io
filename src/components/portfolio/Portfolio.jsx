import "./portfolio.scss";

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">
                    Featured
                </li>
                <li>
                    Web App
                </li>
                <li>
                    Mobile App
                </li>
                <li>
                    Design
                </li>
                <li>
                    Branding
                </li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://cdn.dribbble.com/users/3307260/screenshots/15468444/media/447b4501f7a145b05e11c70199a9c417.jpg?compress=1&resize=1200x900" alt=""/>
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    );
}