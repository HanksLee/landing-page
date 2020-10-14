import * as React from "react";

export default function Block(props) {

    return (

        <div className={`content-block ${props.classStyle}`}>
            <div className="block-head">
                <div className="title-top">{props.titleTop}</div>
                <div className="title-main">{props.title}</div>
                <div className="title-content">{props.titleContent}</div>
            </div>
            <div className={`block-content ${props.dataFlow} `}>
                <div className={`block-button button-left`}></div>
                <div className={`block-content-center ${props.componentClass}`}>{props.content}</div>
                <div className={`block-button button-right`}></div>
            </div>
            {props.componentLength && <div className={`${props.componentClass} block-dot`}>{props.componentLength}</div>}
        </div>
    );
}