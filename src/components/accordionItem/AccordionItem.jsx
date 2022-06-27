import "./accordionItem.scss";

import React, {useState} from "react";

export default function AccordionItem({ title, paragraphs, isOpened }) {
    const [isOpen, setIsOpen] = useState(isOpened);

    return (
        <div
            className={"accordionItem " + (isOpen && "isOpen")}
            onClick={() => {setIsOpen(!isOpen)}}
        >
            <div className="accordionItemLine">
                <h1 className="accordionItemTitle">
                    {title}
                </h1>
                <span className="accordionItemIcon">v</span>
            </div>
            <div className="accordionItemInner">
                <div className="accordionItemContent">
                    {paragraphs.map((paragraph, key) => {
                        return (
                            <div className="accordionItemParagraph" key={key}>
                                <p className="accordionItemParagraphText">
                                    <strong>{paragraph.title}</strong> {paragraph.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}