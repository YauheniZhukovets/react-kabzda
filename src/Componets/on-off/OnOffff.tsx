import React from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: PropsType) {
    // let on = false;
    // let[on, setOn] = useState(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    };

    const onClicked = () => {
        props.onChange(true)
    }
    const offClicked = () => {
        props.onChange(false)
    }

    return <div>
        <div style={onStyle} onClick={() => onClicked()}>ON</div>
        <div style={offStyle} onClick={() => offClicked()}>OFF</div>
        <div style={indicatorStyle}></div>
    </div>

}
