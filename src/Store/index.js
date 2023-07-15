import { createStore } from 'redux'
// import {createSlice} from '@reduxjs/toolkit'

const localState = { counter : 0 , showHandler : true}


const counterReducer = (state=localState,action) => {
if(action.type ==='decrement'){
        return {
            counter : state.counter -5,
            showHandler : state.showHandler
        }
    }

if(action.type ==='increment'){
    return {
        counter : state.counter +5,
        showHandler : state.showHandler
    }
}

if(action.type === 'increase'){
    return{
        counter : state.counter + action.amount,
        showHandler : state.showHandler
    }
}

if(action.type === 'toggle'){
    return {
        showHandler : !state.showHandler,
        counter : state.counter
    }
}
return state;
}

const store= createStore(counterReducer);

export default store