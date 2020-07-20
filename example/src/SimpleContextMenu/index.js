import React from 'react';
import contextReducer from './contextReducer';


export default function ContextMenu(props){

    return <div style={{display:props.visible?"block":"none",position:"absolute",left:props.position.left,top:props.position.top}}> context </div>
}


function toggleContextMenu (event){

    console.log(event.clientX)
    console.log(event.clientY)
}

ContextMenu.defaultProps = {
    visible:false,
    position:{left:0,top:0}
}

export {contextReducer,toggleContextMenu}