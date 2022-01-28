import React, {useEffect, useState} from 'react';


let get2digitsNumber = (num: number) => num < 10 ? '0' + num : num

export const ExampleClock = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timeID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return clearInterval(timeID)
    }, [])

    return (
        <div>
            <span>{get2digitsNumber(date.getHours())}</span>
            :
            <span>{get2digitsNumber(date.getMinutes())}</span>
            :
            <span>{get2digitsNumber(date.getSeconds())}</span>
        </div>
    )
}