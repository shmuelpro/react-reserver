import React from 'react'
function getContent(index, length, content, firstContent, lastContent) {
  if (index === 0) {
    return firstContent || content[index] || <div />;
  }
  else if (length - 1 === index) {
    return lastContent || content[length - 1] || <div />;
  }
  return content[index] || <div />;
}


export default function Bar(props) {

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
      {[...Array(props.length > 0 ? props.length : 1)].map((notUsed, i) => {

        const content = getContent(i, props.length, props.content, props.firstContent, props.lastContent);
          const style = Object.assign({
          width: props.dimension,
          height: props.dimension,
          pointerEvents: props.style.pointerEvents || 'none'
        }, content.props.style || {})

        return (<React.Fragment key={i}>
          {React.cloneElement(content, { ...content.props, style }, content.children)}
        </React.Fragment>)
      })}
      {props.children}
    </div>)
}

Bar.defaultProps = {
  style: {},
  dimension: 20,
  onClick: () => { },
  onMouseOver: () => { },
  onDragStart: () => { },
  onContextMenu: () => { },
  onMouseEnter: () => { },
  onMouseLeave: () => { },
  length: 1,
  content: {}
}
