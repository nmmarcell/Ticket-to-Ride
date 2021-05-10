import { types } from "./types";

const initialState = {
    faszJanos: "pina pina péntek"
};

export function game(state = initialState, action) {
    switch(action.type) {
        case types.FASZ_JANOS: 
            return {
                ...state, 
                faszJanos: "szerelem csütörtök"
            };
        default:
            return state;
    }
}