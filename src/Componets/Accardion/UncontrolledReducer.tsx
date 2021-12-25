type ActionType = {
    type: string
}

export type StateType = {
    collapsed:boolean
}

export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export const uncontrolledReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return {...state, collapsed: !state.collapsed }
        default:
            throw new Error('Bad action type')
    }
}