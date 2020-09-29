import React, { useState, useMemo } from 'react'

export default function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 999999999) i++
        return counterOne % 2 === 0
    }, [counterOne])

    return (
        <div>
            <p>
                Returns a memoized value.

                Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.

                Remember that the function passed to useMemo runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in useEffect, not useMemo.

                If no array is provided, a new value will be computed on every render.
            </p>
            <hr />
            <button
                onClick={incrementOne}
            >counter slow - {counterOne}</button> {isEven ? 'Even' : 'Odd'}
            <hr />
            <button
                onClick={incrementTwo}
            >counter - {counterTwo}</button>
        </div>
    )
}
