import * as React from "react";
import yellowDot from '@/assets/img/yellowDot.svg';


export default function StepItem(props) {
    return (
        <div className="stepItem" style={{textAlign:props.alignText}}>
            <div className="stepItem-title">
                {props.stepItemStep}
            </div>
            <div className="stepItem-icon">
                <div><img src={yellowDot} alt="icon"/><span>...............................................................................</span></div>
                <div>{props.stepItemTitle}</div>
            </div>
            <div className="stepItem-content" >
                {props.stepItemContent}
            </div>
        </div>
    );
}