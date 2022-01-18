import React, {useState} from 'react';


const generateData = () => {
    console.log('generateData')
    return 123456
}

export const UseStateExample = () => {
    console.log('Example 1')

    const [counter, setCounter] = useState(generateData)

    const changer = (state:number) => state + 1

    return (
        <div>
            <button onClick={() => setCounter(changer)}>+</button>
            {counter}
        </div>
    )
}