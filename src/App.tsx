import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Componets/Accardion/Accordion';
import {OnOff} from './Componets/on-off/OnOffff';
import {UncontrolledAccordion} from './Componets/Accardion/UncontrolledAccardion';
import {UncontrolledRating} from './Componets/Rating/UncontrolledRating';
import {Rating, RatingValueType} from './Componets/Rating/Rating';
import {UncontrolledOnnOff} from './Componets/on-off/UncontrolledOnOff';
import {UncontrolledInput} from './Componets/InputCheckboxSelect/UncontrolledInput';
import {ControlledInputCheckbox} from './Componets/InputCheckboxSelect/ControlledInputCheckbox';
import {Select} from './Componets/InputCheckboxSelect/Select';
import {CustomSelect} from './Componets/InputCheckboxSelect/CustomSelect';
import {ReactMemoExample} from './Componets/ReactMemoExample/ReactMemoExample';
import {DifficultCountingExample} from './Componets/ReactMemoExample/UseMemoExample';
import {HelpsForReactMemoExample} from './Componets/ReactMemoExample/HelpsForReactMemoExample';


// function declaration
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollaps, setAccordionCollaps] = useState(true)
    let [switchOn, setSwitchOn] = useState(false)

    const [valueSelect, setValueSelect] = useState<string>('0')  //for newSelect
    const changeValueSelect = (value: string) => {             //for newSelect
        setValueSelect(value)
    }
    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <hr/>
            <UncontrolledOnnOff/>
            <hr/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollaps}
                       onChange={() => setAccordionCollaps(!accordionCollaps)}
                       onClick={(title, value) => alert(`Hello ${title} you id: ${value}`)}
                       items={[
                           {title: 'Zhenya', value: 1},
                           {title: 'Olga', value: 2},
                           {title: 'Vova', value: 3},
                           {title: 'Anya', value: 4}
                       ]}
            />
            <hr/>
            <UncontrolledAccordion titleValue={'-Menu-'}/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <hr/>
            <UncontrolledRating/>
            <hr/>
            <UncontrolledInput/>
            <hr/>
            <ControlledInputCheckbox/>
            <hr/>
            <Select/>
            <hr/>
            <ReactMemoExample/>
            <hr/>
            <DifficultCountingExample/>
            <hr/>
            <HelpsForReactMemoExample/>
            <hr/>
            <CustomSelect
                value={valueSelect}
                callBack={changeValueSelect}
                items={[
                    {value: '0', title: 'none'},
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Kiev'},
                ]}/>
        </div>
    )
}


export default App;
