import * as React from "react";

export default function TradeItem(props) {
    return (
        <div className="tradeItem">
            <div className="tradeItem-icon">
                <img src={props.tradeItemIcon} alt="icon"/>
            </div>
            <div className="tradeItem-title">
                {props.tradeItemTitle}
            </div>
            <div className="tradeItem-content">
                {props.tradeItemContent}
            </div>
        </div>
    );
}