import { useState, useEffect } from 'react'

export function useArrFunc(...args) {
    const [results, setResults] = useState([])
    useEffect(() => {
        if (Array.isArray(args[0])) {

            setResults(args[0])
        } else if (typeof args[0] === 'function') {
            const func = args.splice(0, 1)
            setResults(func[0](...args))
        }        

    }, [JSON.stringify(args)])

    return results
}

export function useFunction(...args) {
    const [results, setResults] = useState()
    useEffect(() => {
        if (typeof args[0] === 'function') {
            const func = args.splice(0, 1)
            setResults(func[0](...args))
        }else{            
            throw "useFunction takes first argument as a function"
        }
    }, [JSON.stringify(args)])

    return results

}
