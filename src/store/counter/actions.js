import { INCREMENT, DECREMENT } from "./types";

export const increment = payload => {
    console.log('increment', payload)    
    return({
    type: INCREMENT, 
    payload,
    })
}

export const decrement = payload => ({
    type: DECREMENT, 
    payload,
})