import React from 'react';


export default function ContextMenu(props) {


    return <div className={props.className} style={{ display: props.visible ? "block" : "none", position: "absolute", left: props.left, top: props.top, zIndex: props.zIndex || 10000 }}>
        <ul>  {props.children}</ul>
    </div>
}

const ContextMenuItem = (props) => {

    return <li onClick={props.onClick}>{props.children}</li>
}

export { ContextMenuItem }

ContextMenu.defaultProps = {
    visible: false,
    left: 0,
    top: 0

}
