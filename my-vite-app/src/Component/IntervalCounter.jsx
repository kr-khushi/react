import React, { useEffect, useState } from "react";

const IntervalCounter = () => {

    const [x, setX] = useState(0)

    const tick = () => {
        setX(x + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [x])


    return(
        <>
            {x}
        </>
    )
}

export default IntervalCounter