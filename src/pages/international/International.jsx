import "./international.scss";

import {ReactComponent as NorthAmerica} from '../../assets/north_america_wo_borders.svg';
import {ReactComponent as Eurasia} from '../../assets/eurasia_wo_borders.svg';

export default function International() {
    return (
        <div className="international">
            <div className="contentContainer">
                <h1 className="internationalTitle">
                    International
                </h1>
                <div className="mapContainer">
                    <div className="imgContainer">
                        <NorthAmerica className="northAmerica"/>
                        <Eurasia className="eurasia"/>
                    </div>
                </div>
                <div className="textContainer">
                    <h1>
                        Text
                    </h1>
                </div>
            </div>
        </div>
    );
}