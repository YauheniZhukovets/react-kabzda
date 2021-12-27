import React from 'react';

type ItemType = {
    title: string
    value: any
}
export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: Array<ItemType>
    onClick: (title:string,value: any)=> void
}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            collapsed={props.collapsed}
                            onChange={props.onChange}
                            />
            {!props.collapsed && <AccordionBody items={props.items}
                                                onClick={props.onClick}/>}

        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

function AccordionTitleRMemo(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onChange()}>{props.title}</h3>
    )
}
const AccordionTitle = React.memo(AccordionTitleRMemo)


export type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (title:string,value: any)=> void
}
function AccordionBodyRMemo(props:AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((m, index) => <li
                onClick={() => {props.onClick(m.title,m.value)} }
                key={index}>{m.title}</li>)}
        </ul>
    )
}
const AccordionBody = React.memo(AccordionBodyRMemo)

