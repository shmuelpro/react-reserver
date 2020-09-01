import React from 'react'

export default function Peg(props) {
  const style = {
    userSelect: 'none',
    pointerEvents: 'none',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    display: 'flex',
    fontSize: '10px',
    background: 'green'
  }

  return <div style={Object.assign(style, props.style)}>{props.children}</div>
}
