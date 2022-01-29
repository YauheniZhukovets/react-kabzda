import React, {useEffect, useState} from 'react';

export const ExampleClock = () => {
    const date = new Date()

    const [dateTime, setDateTime] = useState({
        hors: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    })

    useEffect(() => {
        const timerID = setInterval(() => {
            const date = new Date()
            setDateTime({
                hors: date.getHours(),
                minutes: date.getMinutes(),
                seconds: date.getSeconds()
            })
        }, 1000)
        return () => clearInterval(timerID)
    },[] )


    return (
        <div>
            {dateTime.hors}:{dateTime.minutes}:{dateTime.seconds}
        </div>
    )
}