import React, {useRef, useState} from 'react';

// Используем при каждом вводе символа высвечиваеться символ рядом

// export function UncontrolledInput () {
//        const[value, setValue] = useState('')
//
//     const onChange = (event: ChangeEvent<HTMLInputElement>)=> {
//        const actualValue = event.currentTarget.value;
//         setValue(actualValue)
//
//     }
//     return <><input onChange={onChange}/> - {value} </>
// }

//Get value of uncontrolled input by button press
export function UncontrolledInput() {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save</button>
        - actual value: {value} </>

}
