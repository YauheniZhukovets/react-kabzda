import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Componets/Accardion/Accordion';
import {OnOff} from './Componets/on-off/OnOffff';
import {UncontrolledAccardion} from './Componets/Accardion/UncontrolledAccardion';
import {UncontrolledRating} from './Componets/Rating/UncontrolledRating';
import {Rating, RatingValueType} from './Componets/Rating/Rating';
import {UncontrolledOnnOff} from './Componets/on-off/UncontrolledOnOff';
import {UncontrolledInput} from './Componets/Input/UncontrolledInput';


// function declaration
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollaps, setAccordionCollaps] = useState(true)
    let [switchOn, setSwitchOn] = useState(false)
    return (
        <div className={'App'}>
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnnOff/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollaps}
                       onChange={() => setAccordionCollaps(!accordionCollaps)}/>
            <UncontrolledAccardion titleValue={'Menu'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>




        </div>
    )


// type PageTitlePropsType = {
//     title: string
// }
//
// function PageTitle(props: PageTitlePropsType) {
//     console.log("PageTitle rendering")
//     return <h1>{ props.title }</h1>

}


export default App;
