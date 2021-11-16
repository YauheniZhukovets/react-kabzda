import React from 'react';
import './App.css';
import Accordion from "./Componets/Accardion/Accordion";
import {Rating} from "./Componets/Rating/Rating";
import {OnnOff} from './Componets/on-off/OnOffff';



// function declaration
function App() {
    console.log("App rendering")
    return (
        <div>
            <OnnOff/>

            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"MENU"} collapsed={true}/>
            <Accordion titleValue={"USERS"} collapsed={false}/>
            Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{ props.title }</h1>

}



export default App;
