import React from 'react';
import {ClockViewsPropsType} from './Clock';

export let get2digitsNumber = (num: number) => num < 10 ? '0' + num : num

export const DigitalClockView = ({date}:ClockViewsPropsType) => {
    return <div>
        < span> {get2digitsNumber(date.getHours())}</span>
        :
        <span>{get2digitsNumber(date.getMinutes())}</span>
        :
        <span>{get2digitsNumber(date.getSeconds())}</span>
    </div>
}