import { useState, useEffect } from 'react'
import isObject from '../utils/isObject'
/* Takes either a function, object or an array and resolves to an array
In case the first index of args is:
1. an Object the key func holds the function while the rest of the keys are 
    in order to reinvoke the function, with the rest of the args as params
2. a function run the function with the rest of the args as the params
3. an array - set the array. 
*/

export default function useFunctionObjectArray(...args) {
  const [results, setResults] = useState([])
  useEffect(() => {
    if (isObject(args[0])) {
      const func = args[0].func
      if (typeof func === 'function') {
        args.splice(0, 1)
        setResults(func(...args))
      }
    } else if (typeof args[0] === 'function') {
      const func = args.splice(0, 1)
      setResults(func[0](...args))
    } else if (Array.isArray(args[0])) {
      setResults(args[0])
    }
  }, [JSON.stringify(args)])

  return results
}
