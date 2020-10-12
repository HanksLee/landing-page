import * as React from "react";
import feedbackIcon from '@/assets/img/feedbackIcon.svg';

export default function FeedbackItem(props) {
    return (
        <div className="feedbackItem">
            <div className="feedbackItem-icon">
                <img src={feedbackIcon} alt="icon"/>
            </div>
            <div className="feedbackItem-text">
                {props.feedbackText}
            </div>
            <div className="feedbackItem-member">
                {props.feedbackMember}<img src={props.memberPhoto} alt="photo"/>
            </div>
        </div>
    );
}