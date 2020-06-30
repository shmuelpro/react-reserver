import React from 'react';

export default function Bar(props) {

    return (<div onDragStart={props.onDragStart}
        onClick={() => { props.onClick(props) }}
        onMouseOver={() => { props.onMouseOver(props) }}
        draggable={props.draggable}
        style={{ ...props.style, top: props.top, left: props.left, display: "flex", position: "absolute", zIndex: props.zIndex || "100", pointerEvents: props.pointerEvents }}
        className={props.className} >
        {
            [...Array((props.length && props.length > 0) ? props.length : 1)].map((notUsed, i) => {
                return <div key={i} style={{ width: props.dimension, height: props.dimension, pointerEvents: props.pointerEvents }}></div>
            })
        }
        {props.children}


    </div>)

}

Bar.defaultProps = {
    dimension: 20,
    onClick: () => { },
    onMouseOver: () => { },
    onDragStart: () => { }
}


