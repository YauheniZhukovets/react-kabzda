import React from 'react';
import {Clock} from './Clock';
import {ComponentMeta} from '@storybook/react';

export default {
    title: 'Example/Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

export const BaseAnalogExample = () => {
    return <Clock mode={'analog'}/>
}

export const BaseDigitalExample = () => {
    return <Clock mode={'digital'}/>
}