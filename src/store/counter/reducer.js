import { INCREMENT, DECREMENT } from "./types"

const initialState = {
    number: 0,

}

export const counter = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          number: state.number + 1,
        }
        case DECREMENT:
        return {
          ...state,
          number: state.number - 1,
        }
      default:
        return state;
    }
  }
