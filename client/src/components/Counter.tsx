import { useState, useEffect } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0) // useState creates a state variable called count

    useEffect(() => {
        document.title = `${count}`
    }, [count])

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

export default Counter
