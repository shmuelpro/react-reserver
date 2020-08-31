import { useEffect, useState } from 'react'
import isObject from '../utils/isObject'

export default function useDimension(item) {
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!isNaN(item)) {
      setDimension({ width: item, height: item })
    } else if (isObject(item)) {
      setDimension(item)
    }
  }, [JSON.stringify(item)])

  return dimension
}
