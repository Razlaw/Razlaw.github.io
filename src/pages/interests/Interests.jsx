import "./interests.scss";

import {ReactComponent as FoosballIcon} from '../../assets/icons/foosball.svg';
import {ReactComponent as CameraIcon} from '../../assets/icons/camera.svg';
import {ReactComponent as MoviesIcon} from '../../assets/icons/movies.svg';
import {ReactComponent as JoystickIcon} from '../../assets/icons/joystick.svg';
import {ReactComponent as MusicIcon} from '../../assets/icons/note.svg';
import {ReactComponent as PsychologyIcon} from '../../assets/icons/psychologie.svg';
import {ReactComponent as DrawingIcon} from '../../assets/icons/drawing.svg';
import {ReactComponent as FoodIcon} from '../../assets/icons/food.svg';
import {ReactComponent as TravelIcon} from '../../assets/icons/travel.svg';

export default function Interests() {
    return (
        <div className="interests">
            <div className="interestsContainer">
                <h1 className="interestsTitle">
                    Interessen
                </h1>
                <div className="iconsContainer">
                    <div className="iconContainer">
                        <FoosballIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <CameraIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <MoviesIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <DrawingIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <PsychologyIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <JoystickIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <MusicIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <FoodIcon className="icon"/>
                    </div>
                    <div className="iconContainer">
                        <TravelIcon className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}