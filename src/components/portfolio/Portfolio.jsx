import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {useState} from "react";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "webapp",
            title: "Web App",
        },
        {
            id: "mobileapp",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "branding",
            title: "Branding",
        },
    ];
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
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