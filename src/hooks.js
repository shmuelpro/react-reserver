import { useState, useEffect } from 'react'

export function useArrFunc() {
  const [results, setResults] = useState([])
  const args = [...arguments]
  useEffect(() => {
    if (Array.isArray(args[0])) {
      setResults(args[0])
    } else if (typeof args[0] === 'function') {
      const func = args.splice(0, 1)
      const res = func[0].call({}, ...args)
      setResults(res)
    } else {
      setResults([])
    }
  }, [args[0][0]])

  return results
}
