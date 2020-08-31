import { useState, useEffect } from 'react'
import isObject from '../utils/isObject'
import generateKey from './generateKey'
export default function useFuncOrObj(...args) {
  const [results, setResults] = useState({})

  useEffect(() => {
    if (isObject(args[0])) {
      setResults(args[0])
    } else if (typeof args[0] === 'function') {
      const func = args.splice(0, 1)
      setResults(func[0](...args))
    }
  }, [JSON.stringify(generateKey(args))])

  return results
}
