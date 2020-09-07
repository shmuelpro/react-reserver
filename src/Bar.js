import React from 'react'
import useFuncOrObj from './hooks/useFuncOrObj'

function getContent(index, length, content, firstContent, lastContent) {
  if (index === 0) {
    return firstContent || content[index] || <div />
  } else if (length - 1 === index) {
    return lastContent || content[length - 1] || <div />
  }
  return content[index] || <div />
}

export default function Bar(props) {
  const content = useFuncOrObj(props.content, props.length)
  return (
    <div
      id={props.id}
      role='listitem'
      onDragStart={(e) => {
        props.onDragStart(e, props)
      }}
      onDragEnd={(e) => {
        props.onDragEnd(e, props)
      }}
      onClick={(e) => {
        props.onClick(e, props)
      }}
      onMouseOver={(e) => {
        props.onMouseOver(e, props)
      }}
      onContextMenu={(e) => {
        props.onContextMenu(e, props)
      }}
      onMouseEnter={(e) => {
        props.onMouseEnter(e, props)
      }}
      onMouseLeave={(e) => {
        props.onMouseLeave(e, props)
      }}
      onMouseMove={(e) => {
        props.onMouseMove(e, props)
      }}
      onMouseDown={(e) => {
        props.onMouseDown(e, props)
      }}
      onMouseUp={(e) => {
        props.onMouseUp(e, props)
      }}
      onPointerDown={(e) => {
        typeof props.onPointerDown === 'function' &&
          props.onPointerDown(e, props)
      }}
      draggable={props.draggable}
      style={{
        ...props.style,
        pointerEvents: props.style.pointerEvents || 'none',
        background: props.style.background || '#0E6BA8',
        display: props.style.display || 'flex',
        position: props.style.position || 'absolute',
        zIndex: props.style.zIndex || '100'
      }}
      className={props.className}
    >
      {[...Array(props.length)].map((notUsed, i) => {
        const processedContent = getContent(
          i,
          props.length,
          content,
          props.firstContent,
          props.lastContent
        )

        const style = Object.assign(
          {
            width: props.dimension.width,
            height: props.dimension.height,
            pointerEvents: props.style.pointerEvents || 'none'
          },
          processedContent.props.style || {}
        )

        return (
          <React.Fragment key={i}>
            {React.cloneElement(
              processedContent,
              { ...processedContent.props, style },
              processedContent.props.children
            )}
          </React.Fragment>
        )
      })}
      {props.children}
    </div>
  )
}

Bar.defaultProps = {
  style: {},
  dimension: { width: 20, height: 20 },
  onClick: () => {},
  onMouseOver: () => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  onContextMenu: () => {},
  onMouseDown: () => {},
  onMouseUp: () => {},
  onMouseEnter: () => {},
  onMouseLeave: () => {},
  onMouseMove: () => {},
  length: 1,
  content: {}
}
