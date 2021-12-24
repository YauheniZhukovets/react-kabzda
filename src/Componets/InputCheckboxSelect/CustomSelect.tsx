import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from './CustomSelect.module.css'

type ItemType = {
    title: string
    value: string
}
type SelectPropsType = {
    value: string
    items: ItemType[]
    callBack: (value: string) => void
}

export const CustomSelect = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredValue, SetHoveredValue] = useState(props.value)

    const selectedItem = props.items.find(f => f.value === props.value)
    const hoveredItem = props.items.find(f => f.value === hoveredValue)

    useEffect(() => {
        SetHoveredValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: string) => {
        props.callBack(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (pretendentElement) {
                        props.callBack(pretendentElement.value)
                        return
                    }
                }
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(!active)
        }
    }

    return (

        <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
            <span className={s.main}
                  onClick={toggleItems}

            >{selectedItem && selectedItem.title}</span>

            {active &&
                <div className={s.items}>
                    {props.items.map(m => <div
                            onMouseEnter={() => {
                                SetHoveredValue(m.value)
                            }}
                            className={s.item + ' ' + (hoveredItem === m ? s.selected : '')}
                            key={m.value}
                            onClick={() => onItemClick(m.value)}
                        >
                            {m.title}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
