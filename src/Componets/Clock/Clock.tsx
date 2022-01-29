import React, {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type ClockPropsType = {
    mode?: 'analog' | 'digital'
}
export type ClockViewsPropsType = {
    date: Date
}

export const Clock = (props: ClockPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timeID = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(timeID)
    }, [])


    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
            view = <DigitalClockView date={date}/>
            break
        default:
            console.error('Not found')
    }

    return <div>
        {view}
    </div>

}




