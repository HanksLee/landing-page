import * as React from "react";
import yellowDot from '@/assets/img/yellowDot.svg';


export default function StepItem(props) {
    return (
        <div className={`stepItem ${props.alignText}`} style={{ textAlign: props.alignText }}>
            <div className={`stepItem-step`}>
                {props.stepItemStep}
            </div>
            <div className="stepItem-icon">
                <div className="stepItem-dot"></div>
                <img src={yellowDot} alt="icon" />
            </div>
            <div className="stepItem-title" >
            {props.stepItemTitle}
            </div>
            <div className="stepItem-content" >
                {props.stepItemContent}
            </div>
        </div>
    );
}