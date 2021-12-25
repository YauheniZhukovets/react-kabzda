import React, {useReducer} from 'react'
import {uncontrolledReducer, TOGGLE_COLLAPSED} from './UncontrolledReducer';


type AccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [state, dispatch] = useReducer(uncontrolledReducer, {collapsed:false})
    //let [collapsed,setCollapsed] = useState(true)
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => dispatch({type:TOGGLE_COLLAPSED})  }/>
            {/*<AccordionTitle title={props.titleValue} onClick={()=>setCollapsed(!collapsed)}/>*/}
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => props.onClick()}>{props.title}</h3>
    )
}

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


