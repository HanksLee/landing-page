import * as React from "react";
import assetsItem_oil from '@/assets/img/assetsItem_oil.svg';
import oil_icon from '@/assets/img/assetsItem_oil_Icon.svg';

export default function AssetsItem(props) {
    return (
        <div className="assetsItem">
            <div className="assetsItem-photo">
                <img src={assetsItem_oil} alt="assetsPhoto"/>
            </div>
            <div className="assetsItem-icon">
                <img src={oil_icon} alt="icon"/>
            </div>
            <div className="assetsItem-text">
                {props.assetsText}
            </div>
            
        </div>
    );
}