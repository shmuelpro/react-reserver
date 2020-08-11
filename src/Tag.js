import React from 'react'
import styles from './style.css'

export default function Tag(props) {
  return (
    <span style={props.style} className={styles.tag_content}>
      {props.children}
    </span>
  )
}
