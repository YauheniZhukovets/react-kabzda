import React, {useEffect, useState} from 'react';


export const UseEffectSetTimeout = () => {
    console.log('SetTimeout Example')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {

        // setTimeout( ()=> {
        //     console.log('setTimeoutUseEffect')
        //     document.title = counter.toString()
        // }, 1000 )

        // setInterval(() => {
        //     console.log('setTimeoutUseEffect')
        //         setCounter(state => state + 1)
        // }, 1000)

    },[counter] )


    return (
        <div>
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>*/}
            {/*<button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            {counter}-{fake}
        </div>
    )
}