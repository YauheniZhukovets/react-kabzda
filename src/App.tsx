import React, {useState} from 'react';
import './App.css';
import {Accordion} from './Componets/Accardion/Accordion';
import {OnnOff} from './Componets/on-off/OnOffff';
import {UncontrolledAccardion} from './Componets/Accardion/UncontrolledAccardion';
import {UncontrolledRating} from './Componets/Rating/UncontrolledRating';
import {Rating, RatingValueType} from './Componets/Rating/Rating';
import {UncontrolledOnnOff} from './Componets/on-off/UncontrolledOnOff';


// function declaration
function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collaps, setCollaps] = useState(true)
    let [on, setOn] = useState(false)
    return (
        <div className={'App'}>
            <OnnOff on={on} setOn={setOn}/>
            <UncontrolledOnnOff/>

            <Accordion titleValue={'Menu'} collapsed={collaps} setCollaps={setCollaps}/>
            <UncontrolledAccardion titleValue={'Menu'}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"MENU"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"USERS"} collapsed={false}/>*/}
            {/*Article 2*/}

            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}

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
