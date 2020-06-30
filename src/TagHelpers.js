import { isObject } from './helpers';
import React from 'react';
export function prepareTag(tag) {           
    prepareStyle(tag);
    prepareClass(tag);
    return tag;
}

 function prepareStyle(tag){
   
    var position = getPosition(tag.row, tag.column);
    if(!position.top){
        position.top = 0;
    }

    if(!position.left){
        position.left = 0;


    }
    var style = {  top: position.top, left: position.left  };    

    if (isObject(tag.style)) {
        Object.assign(style, tag.style);
    }
    tag.style = style;
    
}

 function prepareClass(tag){

    var className = "tag";
    if(Array.isArray(tag.className)){
        className= className + ' '+  tag.className.join(' ');      
    }else if(typeof tag.className === "string"){     
        className= className + ' '+  tag.className;    
    }
 
    if(tag.isNew){
        className = className + " cant-select";
    }
    tag.className = className;
    

}



function getPosition(r, c) {
    let element = document.getElementById(`carribean_r${r}c${c}`);
    var position = {};
    if (element) {
        position = element.getBoundingClientRect();
    }
    return position;
}



export function createTagText(text){
      return( <span className="tag-content">{text}</span> )
}


export function isHexLight(color) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}
export function shadeColor2(color, percent) {
    var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
}

export function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }