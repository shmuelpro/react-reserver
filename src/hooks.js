import { useState, useEffect } from 'react'

export function useArrFunc(arrOrFunc, arg1, arg2, arg3, arg4, arg5, arg6) {
  const [results, setResults] = useState([])
  const args = [...arguments]

  if (args.length > 6) {
    console.warn(
      'useArrFunc might not update since it only takes into consideration'
    )
  }
  useEffect(() => {
    if (Array.isArray(args[0])) {
      setResults(args[0])
    } else if (typeof args[0] === 'function') {
      const func = args.splice(0, 1)
      setResults(func[0](...args))
    } else {
      setResults([])
    }
  }, [arrOrFunc, arg1, arg2, arg3, arg4, arg5, arg6])

  return results
}
