import * as React from "react";



export default function Dot(props) {

    function handleChangeData(e) {

        let block = e.currentTarget.getAttribute('name');

        let blockClass = block.substring(0, block.length - 1);
        let itemNum = Number(block[block.length - 1]);
        let childList = document.getElementsByClassName(`${blockClass}_ block-dot`)[0].childNodes;
       
        for (let child of childList) {
            child.classList.remove('dotClick');
        }
        e.currentTarget.classList.add('dotClick');
        let leftWidth = document.getElementsByClassName(`${blockClass}`)[0].clientWidth;
        document.getElementsByClassName(blockClass + '_')[0].scrollLeft = itemNum * leftWidth;

    };

    return (
        <div className={`dotStyle`} onClick={handleChangeData} name={props.name}></div>
    );
}