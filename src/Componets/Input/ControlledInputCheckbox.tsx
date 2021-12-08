import React, {ChangeEvent, useState} from 'react';


// INPUT
// export function ControlledInputCheckbox  () {
//     const [parentValue, setParentValue] = useState('')
//     const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
//         setParentValue(e.currentTarget.value)}
//
//     return <input value={parentValue} onChange={onChange}/>
// }

//CHECKBOX
export function ControlledInputCheckbox  () {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setParentValue(e.currentTarget.checked)}

    return <input type={'checkbox'} checked={parentValue}  onChange={onChange}/>
}