import React, { useRef, useEffect, useState } from 'react';

export function isObject(item) {
  return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

export function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

export function makeId(length = 15) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;

}

export function evaluatePosition(firstPosition, secondPosition) {

    
  return { row: firstPosition.row, column: firstPosition.column, length: secondPosition.column - firstPosition.column + 1 }


}

export   function getPosition(titleWidth, row, column, dimension) {

  let position = { left: titleWidth + column * dimension, top: (row + 1) * dimension }
  
  return position
}


export function getColumnCount(dimension, width,rowTitleWidth) {
  
  return Math.floor((width-rowTitleWidth) / dimension);
}

export function getRowCount(dimension,height){
  return Math.floor(height / dimension);
}


export function resizeBar(editBar,bars,newLocation) {

  let editing = bars.filter((bar) => {
    return bar.editing;
  })

  editing.forEach((bar) => {
    
    let nPosition = evaluatePosition({ column: bar.column, row: bar.row }, newLocation.cell)
    editBar({ ...bar, ...nPosition })
  })


}