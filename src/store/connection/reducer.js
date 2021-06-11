import { types } from "./types";

const initialState = {
    numberOfPlayers: 2,
    roomID: ""
};

export function connection(state = initialState, action) {
    console.log(action);
    switch(action.type) {
        case types.CREATE_ROOM: 
            return {
                ...state,
                numberOfPlayers: action.data.playerNumber,
                roomID: action.data.roomID
            };
        default:
            return state;
    }
}