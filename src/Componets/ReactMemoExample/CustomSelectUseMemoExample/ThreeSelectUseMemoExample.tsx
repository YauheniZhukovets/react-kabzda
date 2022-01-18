import React, {useState} from 'react';
import {CustomSelectUseMemo} from './CustomSelectUseMemo';


export const ThreeSelectUseMemoExample = () => {

    const state = [
        {value: '1', country: 'Belarus', populationCount: 9, city: ['Minsk', 'Borisow', 'Zhodino']},
        {value: '2', country: 'Russia', populationCount: 141, city: ['Moscow', 'Bryansk', 'Smolensk']},
        {value: '3', country: 'Ukraine', populationCount: 44, city: ['Kiev', 'Poltava', 'Herson']},
    ]
    const [counter, setCounter] = useState(0)
    const [valueSelect, setValueSelect] = useState<string>('1')
    const changeValueSelect = (value: string) => {
        setValueSelect(value)
    }


    const Select = React.memo(CustomSelectUseMemo)

    return (
        <div style={{display: 'flex'}}>
            <Select
                value={valueSelect}
                callBack={changeValueSelect}
                state={state}/>
            <Select
                value={valueSelect}
                callBack={changeValueSelect}
                state={state}/>
            <Select
                value={valueSelect}
                callBack={changeValueSelect}
                state={state}/>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}

        </div>
    );
};
