import React from 'react'
import styles from './style.css'

export default function Tag(props) {
  return (
    <div style={props.style} className={styles.tag_content || props.className}>
      {props.children}
    </div>
  )
}
