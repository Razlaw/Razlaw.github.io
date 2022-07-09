import {useEffect} from "react";
import {useCookies} from "react-cookie";

export function ScrollRestoration(elementID) {
    const [cookies, setCookie] = useCookies([]);

    const cookieName = elementID + "ScrollPositionY";

    const onScrollFunction = (e) => {
        setCookie(cookieName, e.target.scrollTop, {
            path: "/",
            secure: true,
            sameSite: "strict"
        });
    }

    useEffect(() => {
        if(cookieName in cookies) {
            const element = document.querySelector("#" + elementID);
            element.scrollTo(0, Number(cookies[cookieName]));
        }
    }, []);

    return onScrollFunction;
}