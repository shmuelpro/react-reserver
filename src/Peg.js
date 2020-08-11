import React from 'react'

export default function Peg(props) {
  return <div style={props.style}>{props.children}</div>
}

Peg.defaultProps = {
  style: {
    userSelect: 'none',
    pointerEvents: 'none',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    display: 'flex',
    fontSize: '10px',
    background: 'green'
  }
}
