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

  const content = useFuncOrObj(props.content)
  return (
    <div
      role='listitem'
      onDragStart={(e) => {
        props.onDragStart(e, props)
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
      {[...Array(props.length)].map((notUsed, i) => {
        const content = getContent(
          i,
          props.length,
          props.content,
          props.firstContent,
          props.lastContent
        )

        const style = Object.assign(
          {
            width: props.dimension,
            height: props.dimension,
            pointerEvents: props.style.pointerEvents || 'none'
          },
          content.props.style || {}
        )

        return (
          <React.Fragment key={i}>
            {React.cloneElement(
              content,
              { ...content.props, style },
              content.props.children
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
  length: 1,
  content: {}
}
