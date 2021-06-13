import socket from "../../socket";
import { types } from "./types";


const initialState = {
    roomID: ""
};

export function connection(state = initialState, action) {
    switch(action.type) {
        case types.SYNC_STATE:
            return {
                ...state
            };
        case types.GET_STATE:
            return {
                ...state
            };
        case types.CREATE_ROOM: 
            return {
                ...state,
                roomID: action.roomID
            };
        case types.JOIN_ROOM: 
            return {
                ...state,
                roomID: action. roomID
            };
        default:
            return state;
    }
}