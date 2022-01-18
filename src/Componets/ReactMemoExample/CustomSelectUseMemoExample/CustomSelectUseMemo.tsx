import React, {KeyboardEvent, useEffect, useState} from 'react';
import s from '../../InputCheckboxSelect/CustomSelect.module.css'


export type ItemType = {
    value: string
    country: string
    populationCount: number
    city: string[]

}
type SelectPropsType = {
    value: string
    state: ItemType[]
    callBack: (value: string) => void
}

export const CustomSelectUseMemo = (props: SelectPropsType) => {


    const [active, setActive] = useState(false)
    const [hoveredValue, SetHoveredValue] = useState(props.value)

    const selectedItem = props.state.find(f => f.value === props.value)
    const hoveredItem = props.state.find(f => f.value === hoveredValue)

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
            for (let i = 0; i < props.state.length; i++) {
                if (props.state[i].value === hoveredValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.state[i + 1]
                        : props.state[i - 1]
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

            >{selectedItem && selectedItem.country}</span>

            {active &&
                <div className={s.items}>
                    {props.state.map(m => <div
                            onMouseEnter={() => {
                                SetHoveredValue(m.value)
                            }}
                            className={s.item + ' ' + (hoveredItem === m ? s.selected : '')}
                            key={m.value}
                            onClick={() => onItemClick(m.value)}
                        >
                        {m.country}
                        </div>
                    )}
                </div>
            }
        </div>
    )
}
