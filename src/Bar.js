import React from 'react'

export default function Bar(props) {
  console.log(props)
  return (
    <div
      role='listitem'
      onDragStart={props.onDragStart}
      onClick={(e) => {
        props.onClick(e, props)
      }}
      onMouseOver={(e) => {
        props.onMouseOver(e, props)
      }}
      onContextMenu={(e) => {
        props.onContextMenu(e)
      }}
      draggable={props.draggable}
      style={{
        ...props.style,
        pointerEvents: props.style.pointerEvents || 'none',
        background: props.style.background || '#0E6BA8',
        display: 'flex',
        position: 'absolute',
        zIndex: props.zIndex || '100'
      }}
      className={props.className}
    >
      {[...Array(props.length && props.length > 0 ? props.length : 1)].map(
        (notUsed, i) => {
          return (
            <div
              key={i}
              style={{
                width: props.dimension,
                height: props.dimension,
                pointerEvents: 'none' || props.style.pointerEvents
              }}
            />
          )
        }
      )}
      {props.children}
    </div>
  )
}

Bar.defaultProps = {
  style: {},
  dimension: 20,
  onClick: () => {},
  onMouseOver: () => {},
  onDragStart: () => {},
  onContextMenu: () => {}
}
