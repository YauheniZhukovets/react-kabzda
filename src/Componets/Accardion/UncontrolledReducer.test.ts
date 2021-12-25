import {uncontrolledReducer, StateType, TOGGLE_COLLAPSED} from './UncontrolledReducer';


test('collapsed should be true',  ()=> {
    //date
const state: StateType = {
    collapsed:false
}
    //action
const newState = uncontrolledReducer(state, {type: TOGGLE_COLLAPSED})
    //expectation
    expect(newState.collapsed).toBe(true)
})


test('collapsed should be false',  ()=> {
    //date
const state: StateType = {
    collapsed:true
}
    //action
const newState = uncontrolledReducer(state, {type: TOGGLE_COLLAPSED})
    //expectation
    expect(newState.collapsed).toBe(false)
})


test('collapsed should throw error',  ()=> {
    //date
const state: StateType = {
    collapsed:true
}
    //expectation
    expect(()=> {
        uncontrolledReducer(state, {type: 'FAKE-TYPE'})
    }).toThrowError()
})

