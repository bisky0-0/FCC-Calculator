import { CALC, DELETEALL, DELETE, NUMBER, EQUAL } from "./actions";
const intial = '';

export function mathExprReducer(state = intial, action) {
    switch (action.type) {
        case NUMBER:
            return state === intial ? action.num : `${state}${action.num}`;
        case CALC:
            return state === intial ? state : `${state}${action.expression}`;
        case DELETEALL:
            return state === intial ? state : '';
        case DELETE:
            return state === intial ? state : state.slice(0, -1);
        case EQUAL:
            return state
        default:
            return state;
    }

}

export function calculating(state = intial, action) {
    console.log(state)
    switch (action.type) {
        case EQUAL:
            return action.result;
        default:
            return state;
    }
}




