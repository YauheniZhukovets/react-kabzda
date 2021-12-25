type ActionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case 'TOGGLE-COLLAPSED':
            return !state
        default:
            return state
    }
    // if (action.type === 'TOGGLE-COLLAPSED') {
    //     return !state
    // }
    // return state

}