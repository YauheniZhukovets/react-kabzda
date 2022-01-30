import {useEffect, useState} from 'react';

export default {
    title: 'Kabzda/UseEffect',
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(0)
    console.log('Component rendered with ' + counter )

    useEffect(() => {
        console.log('Effect occurred '+ counter)

        return () => {
            console.log('Component will unmount ' + counter)
        }
    }, [counter])

    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            Hello, counter: {counter}
            <button onClick={increase}> +</button>
        </>
    )
}


export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text )

    useEffect(() => {
        const handler = (e:KeyboardEvent)=>{
            setText((state) => state + e.key)
        }

        window.addEventListener('keypress', handler)

        return ()=>{
            window.removeEventListener('keypress', handler)
        }
    }, [])

    return (
        <>
            Typed text: {text}
        </>
    )
}



export const SetIntervalTimeoutExample = () => {
    const [text, setText] = useState('')
    console.log('Component rendered with ' + text )

    useEffect(() => {

        const timeOutId = setTimeout( ()=> {
            setText('3 second passed')
        }, 3000 )

        return ()=>{
            clearTimeout(timeOutId)
        }
    }, [])

    return (
        <>
            text: {text}
        </>
    )
}