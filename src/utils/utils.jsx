import {useEffect} from "react";

export function ScrollRestoration(elementID) {
    const scrollPositionKey = elementID + "ScrollPositionY";

    const onScrollFunction = (e) => {
        sessionStorage.setItem(scrollPositionKey, e.target.scrollTop);
    }

    useEffect(() => {
        if(scrollPositionKey in sessionStorage) {
            const element = document.querySelector("#" + elementID);
            element.scrollTo({
                top: Number(sessionStorage.getItem(scrollPositionKey)),
                left: 0,
                behavior: 'smooth'
            });
        }
    }, []);

    return onScrollFunction;
}

export function getAnimationState(inView, wasAnimationPlayed) {
    switch (wasAnimationPlayed) {
        case "true":
            return "postAnimation";
        case null:
            if (!inView) return "preAnimation";
            else return "doAnimation";
        default:
            return "postAnimation";
    }
}