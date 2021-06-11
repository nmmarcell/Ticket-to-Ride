import { types } from "./types";
import socket from "../../socket.js";

const syncState = ( roomID, state ) => {
    socket.emit('sync-state', state, true, (syncResponse) => {
        if(syncResponse.status === 'ok') {
            console.log("State szinkronizálása sikerült");
        }
        else {
            console.log("State szinkronizálása nem sikerült");
        }
    })
    return dispatch => dispatch( {type: types.SYNC_STATE} )
}

const getState = ( roomID ) => {
    socket.emit('get-state', roomID, (getResponse) => {
        if(getResponse === 'ok') {
            dispatch( {type: types.GET_STATE} );

        }
        
    });
}

const createRoom = ( playerNumber ) => dispatch => {
    socket.emit('create-room', playerNumber, (socketResponse) => {
        if(socketResponse.status === 'ok') {
            dispatch({ type: types.CREATE_ROOM, data: {playerNumber: playerNumber, roomID: socketResponse.roomId}});
            socket.emit('sync-state', )
        }
        else {
            console.log("balhé van pali");
        } 
    });
}

const joinRoom = ( roomID, name, picture ) => {
    socket.emit('join-room', roomID, ( joinResponse ) => {
        if(joinResponse.status === 'ok') {
            //getstate + sync
            getState(roomID);
        }
        else {
            console.log("Nem siker a belépés a szobába");
        }
    });
} 



const actions = {
    syncState,
    getState,
    createRoom,
    joinRoom
};
export default actions;