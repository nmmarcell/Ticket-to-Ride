import { types } from "./types";

const initialState = {
    currentPlayer: 0,
    players: []
};

export function connection(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}